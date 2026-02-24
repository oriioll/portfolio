<script setup lang="ts">
//Importing i18n objects
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
<template>
    <nav>
        <ul>
            <li><a href="#me">{{ t('nav.about') }}</a></li>
            <li><a href="#experience">{{ t('nav.experience') }}</a></li>
            <li><a href="#projects">{{ t('nav.projects') }}</a></li>
            <li><a id="cta" href="#contact">{{ t('nav.contact') }}</a></li>
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
    font-size: 1.25rem;
    font-weight: bold;
    transition: all .25s ease-out;
}

a:hover {
    color: var(--txt-primary);
}

/*MEDIA QUERIES - Responsive*/
/* Small devices */
@media (max-width: 800px) {
  a {
    font-size: .8rem;
  }

  ul {
    gap: 1rem;
  }
}
/* Smaller devices */
@media (max-width: 550px) {
  a {
    font-size: .7rem;
    font-weight: 600;
  }

  ul {
    gap: .8rem;
  }
}

</style>