<template>
  <div style="text-align: center; padding: 20px">
    <h2>🚪 Door Status</h2>

    <!-- Door emoji -->
    <div style="font-size: 100px">
      {{ isOpen ? "🚪➡️" : "🚪" }}
    </div>

    <!-- Button -->
    <button
      @click="toggle"
      :style="{
        padding: '10px 20px',
        background: isOpen ? '#4CAF50' : '#f44336',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
      }"
    >
      {{ isOpen ? "CLOSE DOOR" : "OPEN DOOR" }}
    </button>

    <p>
      The door is <strong>{{ isOpen ? "OPEN" : "CLOSED" }}</strong>
    </p>
  </div>
</template>

<script setup>
import { useToggle } from "../composables/useToggle";

const { isOn: isOpen, toggle } = useToggle(false);
// I renamed isOn to isOpen to make more sense for a door!
</script>
