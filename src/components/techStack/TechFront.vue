<script setup lang="ts">
import type TechItem from '@/data/model/TechItem';
import { techStack } from '@/data/techStack.ts';
//New array by filtering the original one by category
const techStackFront: TechItem[] = techStack.filter(i => i.category === 'FRONTEND');
</script>
<template>
    <article class="frontEnd">
        <h5>Front-end</h5>
        <div v-for="t in techStackFront" :key="t.name" class="tech" :class="{'learning' : t.learning}">
            {{ t.name }}
            <img :src="t.icon" :alt="t.name">
        </div>
    </article>
</template>
<style scoped>
.frontEnd {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
    width: 100%;
}

.frontEnd .tech {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: .75rem;
    gap: 1rem;
    border: 1px solid var(--accent-ui);
    border-radius: 10px;
    background-color: rgba(236, 143, 92, 0.1);
    font-weight: 600;
    color: var(--accent-ui);
}
.frontEnd .learning {
    background-color: var(--accent-learning-rgba);
    color: var(--txt-muted);
}

.frontEnd img {
    width: 2rem;
    height: 2rem;
}

/*MEDIA QUERIES - Responsive*/
/* Small devices */
@media (max-width: 1000px) {
    
}

/* Smaller devices */
@media (max-width: 550px) {
}

</style>