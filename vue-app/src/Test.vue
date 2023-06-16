<script setup lang="ts">
import {ref} from "vue";

const hidden = ref(false);

</script>

<template>
    <div data-testid="description-text" v-if="!hidden">
        <span>Hi, i am Test component</span>
    </div>
    <button data-testid="hidden-button" @click="() => hidden = !hidden">hidden</button>
</template>