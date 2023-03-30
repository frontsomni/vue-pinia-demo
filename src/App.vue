<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Count from './components/Count.vue';
import Todo from './components/Todo.vue';
import Async from './components/Async.vue';
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <Count />
  <Todo />
  <Async />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
