<template>
  <div style="max-width: 400px; margin: 50px auto; padding: 20px">
    <h2>Password Strength Checker</h2>

    <!-- Password Input -->
    <div>
      <label>Enter Password:</label>
      <input
        type="password"
        v-model="password"
        style="width: 100%; padding: 8px; margin: 10px 0"
      />
    </div>

    <div
      :style="{
        padding: '10px',
        marginTop: '10px',
        backgroundColor: strengthColor,
        color: 'white',
        textAlign: 'center',
        borderRadius: '5px',
      }"
    >
      <strong>Password Strength: {{ strengthText }}</strong>
    </div>

    <!-- Requirements -->
    <div style="margin-top: 20px; padding: 10px; background: #f5f5f5">
      <p>Requirements:</p>
      <ul>
        <li>Length >= 6 - Medium</li>
        <li>Has numbers - Strong</li>
        <li>Has symbols (!@#$% etc) - Strong</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

// Reactive password variable
const password = ref("");
const strengthText = ref("");
const strengthColor = ref("gray");

// Watch for password changes
watch(password, (newPassword) => {
  // Get password length
  const length = newPassword.length;

  // Check if password has numbers
  const hasNumber = /\d/.test(newPassword);

  // Check if password has symbols (anything that's not letter or number)
  const hasSymbol = /[^a-zA-Z0-9]/.test(newPassword);

  if (length === 0) {
    strengthText.value = "Enter a password";
    strengthColor.value = "gray";
  } else if (length < 6) {
    strengthText.value = "WEAK (too short)";
    strengthColor.value = "red";
  } else if (hasNumber && hasSymbol) {
    strengthText.value = "STRONG";
    strengthColor.value = "green";
  } else if (length >= 6) {
    strengthText.value = "MEDIUM";
    strengthColor.value = "orange";
  }
});
</script>
