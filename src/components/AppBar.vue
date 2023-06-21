<script setup lang="ts">
</script>

<template>
  <header>
    <nav class="wrapper">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  font-family: ‘Josefin Sans’, sans-serif;
}

body {
  background: #0868cf;
}

.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 450px;
  height: 80px;
  border-radius: 50px;
}
</style>