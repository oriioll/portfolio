<script setup lang="ts">
//Importing i18n objects
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
</script>
<template>
  <nav>
    <ul>
      <li>
        <Transition name="fade" mode="out-in">
          <a :key="locale" href="#me">{{ t('nav.about') }}</a>
        </Transition>
      </li>

      <li>
        <Transition name="fade" mode="out-in">
          <a :key="locale" href="#experience">{{ t('nav.experience') }}</a>
        </Transition>
      </li>

      <li>
        <Transition name="fade" mode="out-in">
          <a :key="locale" href="#projects">{{ t('nav.projects') }}</a>
        </Transition>
      </li>

      <li>
        <Transition name="fade" mode="out-in">
          <a :key="locale" id="cta" href="#stack">{{ t('nav.stack') }}</a>
        </Transition>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
nav {
  scroll-behavior: smooth;
  height: auto;
  width: auto;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  list-style: none;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: var(--bg-primary);
  color: var(--accent-ui);
  font-size: 1.25rem;
  font-weight: bold;
  transition: all .25s ease-out;
}

a:hover {
  color: var(--txt-primary);

}

/*Animations for when changing lang */
.fade-enter-active,
.fade-leave-active {
  transition: all .25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(4px);
}

/*MEDIA QUERIES - Responsive*/
/* Small devices */
@media (max-width: 800px) {
  a {
    font-size: .9rem;
  }

  ul {
    gap: 1rem;
  }
}

/* Smaller devices */
@media (max-width: 550px) {
  a {
    font-size: .8rem;
    font-weight: 600;
  }

  ul {
    gap: .8rem;
  }
}
</style>