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
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--bg-primary);
    padding: 1.25rem .5rem;
    box-sizing: border-box;
    overflow: hidden;
    border-bottom: solid 2px var(--accent-ui);   
}

/* If user navigator supports animation-timeline */
@supports (animation-timeline: scroll()) {
  header {
    border-bottom: none;
    animation: borderHeader ease-in-out both;
    animation-timeline: scroll(root);
    animation-range: 0 150px;
  }
}

/*KEYFRAMES - Animations*/
@keyframes borderHeader {
  from {
    border-bottom: solid 2px rgba(255, 255, 255, 0);
  }
  to {
    border-bottom: solid 2px var(--accent-ui);
  }
}
/*MEDIA QUERIES - Responsive*/
/* Smaller devices */
@media (max-width: 550px) {
  header {
    gap: .3rem;
    padding: 1rem 0.25rem;
  }
}
</style>