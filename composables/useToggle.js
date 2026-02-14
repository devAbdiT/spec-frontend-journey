import { ref } from "vue";

export function useToggle(startWith = false) {
  const isOn = ref(startWith);

  function toggle() {
    isOn.value = !isOn.value;
  }

  return { isOn, toggle };
}
