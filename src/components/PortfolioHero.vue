<script setup lang="ts">
import HeroCtas from './hero/HeroCtas.vue';
import HeroGoDown from './hero/HeroGoDown.vue';
//Importing i18n objects
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

//Import utils functions
import { scrollDown } from '@/utils/navigation.ts';
</script>
<template>
  <section id="hero" class="hero">
    <div class="mainHero">
      <article class="txt">
        <Transition name="fade" mode="out-in">
          <h1 :key="locale">Oriol Plazas León<span class="codeSymbol">  =&gt; {}</span></h1>
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
    <HeroGoDown @click="scrollDown(70)" class="goDownIcon"></HeroGoDown>
  </section>

</template>
<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 100%;
  height: auto;
  gap: 2rem;
  box-sizing: border-box;
  overflow-x: hidden;
}

.mainHero {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5rem;
  width: 90%;
  max-width: 100%;
  height: auto;
  padding: 2rem;
  box-sizing: border-box;
}

.txt {
  display: flex;
  flex-direction: column;
  max-width: 60%;
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

.goDownIcon {
  margin-top: 3rem;
  transition: all .25s ease-out;
}

.goDownIcon:hover {
  cursor: pointer;
  transform: translateY(-4px);
}

.codeSymbol {
  font-family: var(--code-font);
  color: var(--accent-ui);
  /*Ligatures for arrow*/
  font-variant-ligatures: discretionary-ligatures;
  font-feature-settings: "liga" 1, "calt" 1;
  text-rendering: optimizeLegibility;
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
  .goDownIcon {
    display: none;
  }

  .mainHero {
    flex-direction: column-reverse;
    gap: 2rem;
  }

  .hero img {
    width: 8rem;
    height: 8rem;
  }

  .txt {
    max-width: 100%;
  }
}

/* Smaller devices */
@media (max-width: 550px) {
  .mainHero {
    gap: 2rem;
    padding: 1.5rem 1rem;
  }

  .txt {
    max-width: 100%;
  }
}

/* Extra small devices */
@media (max-width: 380px) {
  .mainHero {
    gap: 1.5rem;
    padding: 1rem 0.5rem;
    width: 95%;
  }

  .hero {
    gap: 1.5rem;
  }
}
</style>