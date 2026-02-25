<script setup lang="ts">
import HeaderLanguages from './header/HeaderLanguages.vue';
import HeaderNav from './header/HeaderNav.vue';
</script>
<template>
    <header>
        <HeaderNav />
        <HeaderLanguages />
    </header>
</template>
<style scoped>
header {
    scroll-behavior: smooth;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
    /*background-color: var(--accent-ui);*/
    background: var(--bg-primary);
    border-radius: 0 0 15px 15px;
    border: solid 2px var(--accent-ui);
    border-top: none;
    padding: .5rem;
}
/*MEDIA QUERIES - Responsive*/
/* Smaller devices */
@media (max-width: 550px) {
  header {
    gap: .5rem;
    padding: 1rem .5rem;
  }
}
</style>