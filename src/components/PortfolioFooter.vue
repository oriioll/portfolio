<script setup lang="ts">
//Import i18n objects
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

import { ref, type Ref } from 'vue';
const YEAR: Ref = ref(new Date().getFullYear());
</script>
<template>
    <footer>
        <p>
            Oriol Plazas León {{ YEAR }}
        </p>
        <a href="https://github.com/oriioll/portfolio" target="_blank">Repo</a>
        <div class="built">
            <Transition name="fade" mode="out-in">
                <p :key="locale">{{ t('footer.build') }}</p>
            </Transition>
            <div class="techs">
                <img src="/public/icons/vue.svg" alt="Vue logo">
                <img src="/public/icons/ts.svg" alt="Typescript logo">
            </div>
        </div>
    </footer>
</template>
<style scoped>
footer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
}

footer a {
    color: var(--accent-ui);
    font-weight: 600;
}

footer .built {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: .5rem;
}

.techs {
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;
}

.techs img {
    height: 1.5rem;
    width: 1.5rem;
}

/*MEDIA QUERIES - Responsive*/
/* Smaller devices */
@media (max-width: 550px) {
    header {
        gap: .3rem;
        padding: 1rem 0.25rem;
    }
}
</style>