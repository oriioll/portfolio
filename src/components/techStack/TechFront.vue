<script setup lang="ts">
import { computed } from 'vue';
import { techStack } from '@/data/techStack.ts';

import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

//Prop for knowing which category to show
const props = defineProps({
    category: String,
    title: String
})

//New array by filtering the original one by category
const techStackFiltered = computed(() => {
    return techStack.filter(i => i.category === props.category);
});

</script>
<template>
    <article class="frontEnd">
        <h5 class="title">{{ props.title }}</h5>
        <article class="techGrid">
            <div v-for="tech in techStackFiltered" :key="tech.name" class="tech" :class="{ 'learning': tech.learning }">
                <div class="txt">
                    {{ tech.name }}
                    <Transition name="fade" mode="out-in">
                        <span v-if="tech.learning == true" class="learningTag" :key="locale">{{ t('tech.learning')
                            }}</span>
                    </Transition>

                </div>
                <img :src="tech.icon" :alt="tech.name">
            </div>
        </article>
    </article>
</template>
<style scoped>
.frontEnd {
    width: 100%;
    border: solid 1px var(--accent-ui);
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.title {
    color: var(--accent-ui);
}

.frontEnd .tech {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .75rem 2rem;
    border: 1px solid var(--accent-ui);
    border-radius: 6px;
    background-color: rgba(236, 143, 92, 0.1);
    font-weight: 600;
    color: var(--accent-ui);
    font-size: .9rem;
    gap: 1rem;
    transition: all 0.3s ease-out;
}

.frontEnd .tech:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(236, 143, 92, 0.15);
}

.learningTag {
    font-size: 0.6rem;
    background-color: rgba(236, 143, 92, 0.1);
    color: var(--txt-muted);
    padding: 2px 6px;
    border-radius: 4px;
    border: 1px solid var(--txt-muted);
    text-transform: uppercase;
}

.txt {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: .25rem;
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

.frontEnd .tech:hover img {
    filter: brightness(1.2);
    /* Brillo suave al logo */
    transition: transform 0.3s ease;
}

/*Animations for when changing lang */
.fade-enter-active,
.fade-leave-active {
    transition: all .25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/*MEDIA QUERIES - Responsive*/
/* Small devices */
@media (max-width: 1000px) {
    .frontEnd .tech {
        padding: 0.25rem 1rem;
        font-size: 0.8rem;
    }

    .techGrid {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 0.5rem;
    }

    .frontEnd img {
        width: 1.75rem;
        height: 1.75rem;
    }

    .learningTag {
        font-size: 0.4rem;
        background-color: rgba(236, 143, 92, 0.1);
        color: var(--txt-muted);
        padding: 1px 4px;
    }

    .txt {
        font-size: .6rem;
    }

}

/* Smaller devices */
@media (max-width: 550px) {
    .techGrid {
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: 0.5rem;
    }

    .frontEnd img {
        width: 1.35rem;
        height: 1.35rem;
    }
}
</style>