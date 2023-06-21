<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppBar from './components/AppBar.vue';
</script>

<template>
  <v-app>
    <v-main>
      <AppBar />
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
* {
  text-decoration: none;
  font-family: 'Josefin Sans', sans-serif;
}
.v-main {
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>