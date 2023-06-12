<script setup lang="ts">
import {ref} from "vue";

const hidden = ref(false);

</script>

<template>
    <div v-if="!hidden">
        <span>Hi, i am Test component</span>
    </div>
    <button @click="() => hidden = !hidden">hidden</button>
</template>