Task 4
<script setup>
import { ref } from "vue";

const count = ref(0);

const increase = () => {
  count.value++;
};

const decrease = () => {
  if (count.value > 0) {
    count.value--;
  }
};

const reset = () => {
  count.value = 0;
};
</script>
<template>
  <div>
    <h2>Counter: {{ count }}</h2>

    <button @click="decrease" :disabled="count === 0">-</button>
    <button @click="increase">+</button>

    <button @click="reset" :disabled="count === 0">Reset</button>
  </div>
</template>

<style scoped>
button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>