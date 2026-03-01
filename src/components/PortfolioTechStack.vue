<script setup lang="ts">
import TechFrontend from './techStack/TechFront.vue';
//Importing i18n objects
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
</script>
<template>
    <section class="techStack">
        <Transition name="fade" mode="out-in">
            <h3 class="title" :key="locale">{{ t('nav.stack') }}</h3>
        </Transition>
        <div class="categories">
            <TechFrontend category="FRONTEND" title="Front-end" class="cat"></TechFrontend>
            <TechFrontend category="BACKEND" title="Back-end" class="cat"></TechFrontend>
            <TechFrontend category="TOOLS" title="Dev tools" class="cat"></TechFrontend>

        </div>
    </section>
</template>
<style scoped>
.title {
    color: var(--accent-ui);
}
.techStack {
    width: 90%;
    max-width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    box-sizing: border-box;
    overflow-x: hidden;
}

.techStack .cat {
    border: solid 1px var(--accent-ui);
    border-radius: 10px;
    padding: 1rem;
}
.categories {
    width: 100%;
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
@media (max-width: 800px) {

}

/* Smaller devices */
@media (max-width: 550px) {

}

/* Extra small devices */
@media (max-width: 380px) {

}
</style>