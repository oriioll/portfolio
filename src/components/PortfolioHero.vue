<script setup lang="ts">
//Importing i18n objects
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

</script>
<template>
  <section id="hero" class="hero">
    <div class="txt">
      <Transition name="fade" mode="out-in">
        <h1 :key="locale">Oriol Plazas León</h1>
      </Transition>
      <Transition name="fade" mode="out-in">
        <h3 :key="locale">{{ t('hero.subtitle') }}</h3>
      </Transition>
      <Transition name="fade" mode="out-in">
        <p :key="locale">{{ t('hero.description') }}</p>
      </Transition>
    </div>
    <img src="../assets/oriolPf.webp" alt="Image of Oriol Plazas León" loading="lazy">
  </section>
</template>
<style scoped>
.hero {
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

  h3 {
    color: var(--accent-ui);
  }
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
  .emoji {
    width: 2.5rem;
  }
}

/* Smaller devices */
@media (max-width: 550px) {
  .emoji {
    width: 1.6rem;
  }

  aside {
    gap: .5rem;
  }
}
</style>