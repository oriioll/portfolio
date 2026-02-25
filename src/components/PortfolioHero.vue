<script setup lang="ts">
import HeroCtas from './hero/HeroCtas.vue';
//Importing i18n objects
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

</script>
<template>
  <section id="hero" class="hero">
    <div class="mainHero">
      <article class="txt">
        <Transition name="fade" mode="out-in">
          <h1 :key="locale">Oriol Plazas León</h1>
        </Transition>
        <Transition name="fade" mode="out-in">
          <h3 :key="locale">{{ t('hero.subtitle') }}</h3>
        </Transition>
        <Transition name="fade" mode="out-in">
          <p :key="locale">{{ t('hero.description') }}</p>
        </Transition>
      </article>
      <img src="../assets/oriolPf.webp" alt="Image of Oriol Plazas León" loading="lazy">
    </div>
    <HeroCtas></HeroCtas>
  </section>

</template>
<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  gap: 2rem
}
.mainHero {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  width: 90%;
  height: auto;
  padding: 2rem;
}

.txt {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.txt h3 {
  color: var(--accent-ui);
}

.hero img {
  width: 15rem;
  height: 15rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  border: solid 4px var(--accent-ui);
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
  .mainHero {
    flex-direction: column-reverse;
    gap: 2rem;
  }

  .hero img {
    width: 10rem;
    height: 10rem;
  }
}

/* Smaller devices */
@media (max-width: 550px) {}
</style>