<script setup lang="ts">
//Importing i18n objects
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

//Import experience object array
import { EXPERIENCE } from '@/data/experience';
</script>
<template>
    <section class="experience" id="experience">
        <Transition name="fade" mode="out-in">
            <h3 class="title" :key="locale">{{ t('nav.experience') }}</h3>
        </Transition>
        <div class="jobs">
            <!--Job Cards-->
            <article v-for="job in EXPERIENCE" class="job">
                <div class="top">
                    <h4 class="role">{{ t(job.roleKey) }}</h4>
                    <p class="date">{{ job.hireDate.toLocaleDateString("es-Es", { month: "2-digit", year: "numeric" }) }}
                        - {{ job.endDate.toLocaleDateString("es-Es", { month: "2-digit", year: "numeric" }) }}</p>
                </div>
                <h5 class="company">{{ job.company }}</h5>
                <p class="desc">{{ t(job.descKey) }}</p>
            </article>
        </div>
    </section>
</template>
<style scoped>
.experience {
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

.experience .jobs {
    align-self: center;
    padding-right: 1rem;
    padding-left: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    gap: .25rem;
    border-left: 2px solid var(--accent-ui);
}
.job {
    padding-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: .25rem;
}

.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .75rem;
}

.experience .role {
    color: var(--accent-ui);
}

.experience .company {
    padding-bottom: 1rem;
}

.experience .date {
    color: var(--txt-muted);
}

.experience .desc {
    opacity: .9;
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
    .experience {
        padding: 1.5rem 1rem;
    }

    .experience .jobs {
        width: 100%;
    }

}

/* Smaller devices */
@media (max-width: 550px) {}

/* Extra small devices */
@media (max-width: 380px) {}
</style>