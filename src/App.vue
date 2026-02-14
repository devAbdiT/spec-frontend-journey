<template>
  <div style="padding: 20px">
    <h3>Password Checker</h3>

    <input
      type="password"
      v-model="password"
      placeholder="Type password"
      style="padding: 5px"
    />

    <p>
      Strength:
      <span :style="{ color: textColor }">
        {{ message }}
      </span>
    </p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const password = ref("");
const message = ref("");
const textColor = ref("black");

watch(password, (newValue) => {
  const length = newValue.length;

  const hasNumber = /[0-9]/.test(newValue);

\  const hasSymbol = /[^a-zA-Z0-9]/.test(newValue);

  // Simple logic
  if (length === 0) {
    message.value = "Type password";
    textColor.value = "gray";
  } else if (length < 6) {
    message.value = "Weak";
    textColor.value = "red";
  } else if (hasNumber && hasSymbol) {
    message.value = "Strong";
    textColor.value = "green";
  } else {
    message.value = "Medium";
    textColor.value = "orange";
  }
});
</script>
