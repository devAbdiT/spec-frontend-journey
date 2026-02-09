<template>
  <div class="user-card">
    <h3>{{ name }}</h3>
    <p>{{ role }}</p>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: ["name", "role"],
};
</script>

<style scoped>
.user-card {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 1rem;
  max-width: 250px;
}

.user-card h3 {
  margin: 0 0 0.5rem 0;
}

.user-card p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}
</style>
