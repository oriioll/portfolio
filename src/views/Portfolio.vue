<script setup lang="ts">
import PortfolioHeader from '@/components/PortfolioHeader.vue';
import PortfolioHero from '@/components/PortfolioHero.vue';
</script>
<template>
    <main>
        <PortfolioHeader />
        <PortfolioHero />
    </main>
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
}
</style>