<script setup>
import { ref } from "vue";

const name = ref("");
</script>

<template>
  <input v-model="name" placeholder="Type your name" />
  <p v-if="name">Hello {{ name }}!</p>
</template>

<style scoped>
input {
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

p {
  font-size: 18px;
  color: #42b883;
  font-weight: bold;
  margin-top: 10px;
}
</style>
