<script setup lang="ts">
import HeaderLanguages from './HeaderLanguages.vue';
</script>
<template>
    <header>
        <HeaderLanguages />
    </header>
</template>
<style scoped>
main {
    scroll-behavior: smooth;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 5rem;
}

</style>