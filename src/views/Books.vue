<script setup lang="ts">
import { ref, computed } from 'vue';

// @ts-ignore
import { Book } from '../types/Book';
import { useBookStore } from '../stores/book';

const store = useBookStore();
store.POPULATE_FROM_CACHE();

const search = ref('');
let books = ref(store.getAll || [] as Book[]);

const filteredBooks = computed(
  () => books.value.filter((book: Book) => book.title.toLowerCase().includes(search.value.toLowerCase()))
);

</script>

<template>
  <v-card>
    <v-toolbar title="My Books" />
    <v-card-text>
      <v-row>
        <v-text-field v-model="search" label="Search"/>
        <v-spacer />
        <v-btn @click="store.POPULATE_FROM_CACHE()" icon="mdi-refresh" />
        <v-spacer />
        <v-btn @click="">Add Books</v-btn>
      </v-row>
      <v-list>
        <v-list-item v-for="book in filteredBooks" :key="book.id">
          <v-card>
            <v-img :src="book.cover" />
            <v-card-title>{{ book.title }}</v-card-title>
            <v-card-subtitle>{{ book.author }}</v-card-subtitle>
          </v-card>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>