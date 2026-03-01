<script setup lang="ts">
import { techStack } from '@/data/techStack.ts';
</script>
<template>
    <article class="frontEnd">
        <p>test back</p>
    </article>
</template>
<style scoped>
.frontEnd {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
}

/*MEDIA QUERIES - Responsive*/
/* Small devices */
@media (max-width: 1000px) {
    
}

/* Smaller devices */
@media (max-width: 550px) {
}

</style>