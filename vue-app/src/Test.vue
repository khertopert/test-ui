<script setup lang="ts">
import {ref} from "vue";

const hidden = ref(false);

</script>

<template>
    <div data-testid="description-text" v-if="!hidden">
        <span>Hi, i am Test component</span>
        <slot name="button"></slot>
    </div>
    <slot v-for="item in [1,2,3,4,5]" name="myTemplate" :key="item" :counter="item" :text="item.toString()"></slot> 
    <button data-testid="hidden-button" @click="() => hidden = !hidden">hidden</button>
</template>