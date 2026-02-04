<!-- <script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script> -->

<!-- Topic One -->
<!-- <script setup>
const name = "SPEC Developer";
</script>

<template>
  <h1>Hello {{ name }}</h1>
</template> -->

<!-- Topic TWo  -->
<script setup>
import { ref } from "vue";
const name = ref("");
</script>

<template>
  <input v-model="name" placeholder="Type your name" />
  <p>Hello {{ name }}</p>
</template>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
