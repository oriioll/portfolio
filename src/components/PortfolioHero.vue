<script setup lang="ts">
//Importing i18n objects
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>
<template>
    <section id="hero" class="hero">
        <div class="txt">
            <h1>Oriol Plazas León</h1>
            <h2>{{ t('hero.subtitle') }}</h2>
            <p>{{ t('hero.description') }}</p>
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
    width: 100%;
    height: auto;
}
.hero img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    object-fit: cover;
    border: solid 4px var(--accent-ui);
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