<script setup lang="ts">
import { ref } from "vue";
import Test from "./Test.vue";

let value = ref('');

function handleChange(e: Event) {
  value.value = (e.target as HTMLInputElement).value;
}

</script>

<template>
  <div>
    <input type="text" @input="handleChange" />
  </div>
  <div>
    current value is: {{value}}
  </div>
  <Test></Test>
</template>

<style scoped>
</style>
