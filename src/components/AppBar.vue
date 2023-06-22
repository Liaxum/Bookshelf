<script setup lang="ts">
</script>

<template>
  <v-bottom-navigation>
    <v-btn variant="text" to="/">
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-spacer />
    <v-btn variant="text" to="/book">
      <v-icon>mdi-book</v-icon>
      <v-tooltip activator="parent" location="bottom" open-delay="750">
        Book Collection
      </v-tooltip>
    </v-btn>
    <v-btn variant="text" to="/bookshelf">
      <v-icon>mdi-bookshelf</v-icon>
      <v-tooltip activator="parent" location="bottom" open-delay="750">
        Bookshelf Collection
      </v-tooltip>
    </v-btn>
    <v-btn variant="text" to="/friends">
      <v-icon>mdi-account-group</v-icon>
      <v-tooltip activator="parent" location="bottom" open-delay="750">
        Friends Interactions
      </v-tooltip>
    </v-btn>
    <v-spacer />
    <v-btn variant="text" to="/search">
      <v-icon>mdi-magnify</v-icon>
      <v-tooltip activator="parent" location="bottom" open-delay="750">
        Search Books/Shelf/Friend
      </v-tooltip>
    </v-btn>
    <v-btn variant="text" to="/account">
      <v-icon>mdi-account</v-icon>
      <v-tooltip activator="parent" location="bottom" open-delay="750">
        My Account
      </v-tooltip>
    </v-btn>
  </v-bottom-navigation>
</template>

<style scoped>
.v-bottom-navigation {
  margin-top: 1em;
  position: initial !important;
  border-radius: 20px;
  width: 85% !important;
}
</style>