<script setup lang="ts">
import { ref } from "vue";
import Test from "./Test.vue";

let value = ref('');

function handleChange(e: Event) {
  value.value = (e.target as HTMLInputElement).value;
}

function testTemplateCilck() {
  alert(value.value);
}

</script>

<template>
  <div>
    <input data-testid="input" type="text" @input="handleChange" />
  </div>
  <div>
    current value is: {{value}}
  </div>
  <Test>
    <span>my caption: </span>
    <template #button>
      <button>test</button>
    </template>
    <template #myTemplate="{counter, text}">
      <h1>test template: {{text}}</h1>
      <button :data-testid="'templateButton' + counter" @click="testTemplateCilck">Test My Template</button>
    </template>
  </Test>
</template>

<style scoped>
</style>
