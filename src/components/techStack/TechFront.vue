<script setup lang="ts">
import type TechItem from '@/data/model/TechItem';
import { techStack } from '@/data/techStack.ts';

//Prop for knowing which category to show
const props = defineProps({
    category: String,
    title: String
})

//New array by filtering the original one by category
const techStackFiltered: TechItem[] = techStack.filter(i => i.category === props.category);

</script>
<template>
    <article class="frontEnd">
        <h5>{{ props.title }}</h5>
        <article class="techGrid">
            <div v-for="t in techStackFiltered" :key="t.name" class="tech" :class="{ 'learning': t.learning }">
                {{ t.name }}
                <img :src="t.icon" :alt="t.name">
            </div>
        </article>
    </article>
</template>
<style scoped>
.frontEnd {
    width: 100%;
    border: solid 1px var(--accent-ui);
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.frontEnd .tech {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .75rem 2rem;
    border: 1px solid var(--accent-ui);
    border-radius: 10px;
    background-color: rgba(236, 143, 92, 0.1);
    font-weight: 600;
    color: var(--accent-ui);
    font-size: .9rem;
    gap: 1rem;
}

.techGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 1rem;
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
    .frontEnd .tech {
        padding: 0.5rem 1rem; 
        font-size: 0.8rem;    
    }
    .techGrid {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); 
        gap: 0.5rem; 
    }
    .frontEnd img {
        width: 1.5rem;        
        height: 1.5rem;
    }
}

/* Smaller devices */
@media (max-width: 550px) {

}
</style>