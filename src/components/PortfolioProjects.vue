<script setup lang="ts">
//Importing i18n objects
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

//Import experience object array
import { PROJECTS } from '@/data/projects.ts';

//Import util function
import { openLink } from '@/utils/navigation';
</script>
<template>
  <section class="projects" id="projects">
    <Transition name="fade" mode="out-in">
      <h3 class="title" :key="locale">{{ t('nav.projects') }}</h3>
    </Transition>
    <div class="projects-container">
      <!--Project Cards-->
      <article v-for="project in PROJECTS" class="project">
        <img class="mockup" :src="project.image" alt="Projectdemo image">
        <h5>{{ t(project.titleKey) }}</h5>
        <p>{{ t(project.descKey) }}</p>
        <div class="icons">
          <div class="techs">
            <img v-for="tech in project.stack" :src="tech.icon" alt="Used in project tech icon" class="techIcon" loading="lazy">
          </div>
          <div class="url">
            <img v-if="project.demoUrl" @click="openLink(project.demoUrl)" src="/public/icons/link.svg" alt="Demo link">
            <img @click="openLink(project.githubUrl)" src="/public/icons/githublight.svg" alt="Github Repo Link">
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
<style scoped>
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
  gap: 2rem;
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
  border-radius: 10px;
}

.mockup {
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 12px;
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
  border-radius: 10px;
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
    padding: 1.5rem 1rem;
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