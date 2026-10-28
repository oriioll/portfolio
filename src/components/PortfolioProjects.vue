<script setup lang="ts">
import type Project from '@/data/model/Project';
import ProjectDialog from './projects/ProjectDialog.vue';
//Importing i18n objects
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

//Import experience object array
import { PROJECTS } from '@/data/projects.ts';

//Import util function
import { openLink } from '@/utils/navigation';
import { ref } from 'vue';


//Handle project dialog
const isProjectOpen = ref(false)
const projectClicked = ref<Project>()
const openCard = (p: Project) => {
  projectClicked.value = p;
  isProjectOpen.value = true;
}

const closeCard = () => {
  isProjectOpen.value = false;
}
</script>
<template>
  <section class="projects" id="projects">
    <Transition name="fade" mode="out-in">
      <h3 class="title" :key="locale">{{ t('nav.projects') }}</h3>
    </Transition>
    <div class="projects-container">
      <!--Project Cards-->
      <article v-for="project in PROJECTS" class="project" @click="openCard(project)">
        <img @click.stop="openLink(project.image)" class="mockup" :src="project.image" alt="Projectdemo image">
        <h5>{{ t(project.titleKey) }}</h5>
        <p>{{ t(project.descKey) }}</p>
        <div class="icons">
          <div class="techs">
            <img v-for="tech in project.stack" :src="tech.icon" alt="Used in project tech icon" class="techIcon"
              loading="lazy">
          </div>
          <div class="url">
            <img v-if="project.demoUrl" @click.stop="openLink(project.demoUrl)" src="/public/icons/link.svg" alt="Demo link">
            <img @click.stop="openLink(project.githubUrl)" src="/public/icons/githublight.svg" alt="Github Repo Link">
          </div>
        </div>
      </article>
    </div>
  </section>
  <Transition name="popup">
    <ProjectDialog v-if="isProjectOpen" :project="projectClicked!" @close-project="closeCard" />
  </Transition>
</template>
<style scoped>
:global(.popup-enter-active),
:global(.popup-leave-active) {
  transition: opacity .22s ease;
}

:global(.popup-enter-active .project-dialog),
:global(.popup-leave-active .project-dialog) {
  transition: transform .22s cubic-bezier(.2, .75, .3, 1);
}

:global(.popup-enter-from),
:global(.popup-leave-to) {
  opacity: 0;
}

:global(.popup-enter-from .project-dialog),
:global(.popup-leave-to .project-dialog) {
  transform: translateY(8px) scale(.985);
}

@media (prefers-reduced-motion: reduce) {
  :global(.popup-enter-active),
  :global(.popup-leave-active),
  :global(.popup-enter-active .project-dialog),
  :global(.popup-leave-active .project-dialog) {
    transition-duration: .01ms;
  }
}

.projects {
  width: 90%;
  max-width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  overflow-x: hidden;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  width: 100%;
}

.project {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem;
  border: solid 1px var(--accent-ui);
  border-radius: 6px;
  transition: all .2s ease;
}

.project:hover {
  cursor: pointer;
  transform: translateY(-3px);
}

.mockup {
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
}

.project .icons {
  display: flex;
  justify-content: space-between;
}

.icons .techs,
.icons .url {
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: solid 1px var(--accent-ui);
  border-radius: 6px;
  padding: .75rem;
}

.techs img,
.url img {
  width: 1.5rem;
  height: 1.5rem;
}

.url img {
  cursor: pointer;
  transition: all .3s ease-out;
}

.url img:hover {
  transform: translateY(-2px);
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
  .projects {
    padding: 1.5rem .25rem;
  }

  .project {
    gap: .5rem;
  }

  .projects .projects-container {
    width: 100%;
  }

  .techs img,
  .url img {
    width: 1rem;
    height: 1rem;
  }

}

/* Smaller devices */
@media (max-width: 550px) {}

/* Extra small devices */
@media (max-width: 380px) {}
</style>