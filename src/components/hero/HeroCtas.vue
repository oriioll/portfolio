<script setup lang="ts">
import { ref } from 'vue';
//Importing i18n objects
import { useI18n } from 'vue-i18n';
import{ openLink } from '@/utils/navigation';
const { t, locale } = useI18n();

//Handling email copy to clipboard
const EMAIL: string = 'oriolplazas2@gmail.com';
let copied = ref(false)

/**
 * Function that copies a text to the clipboard and changes a reactive variable to change the svg for 2 seconds
 * @param txt the txt you want to copy
 * @author Oriol Plazas León
 * @since 27/02/2026
 * @see navigator.clipboard.writeText()
 * @see changeSvg()
 */
function cpText(txt: string): void {
    navigator.clipboard.writeText(txt).then(changeSvg);
}

/**
 * Function that changes a reactive variable to change the svg for 2 seconds
 * @author Oriol Plazas León
 * @since 27/02/2026
 * @see cpText()
 */
const changeSvg = (): void => {
    copied.value = true;
    setTimeout(() => {
        copied.value = false;
    }, 2000);
}



</script>
<template>
    <section class="ctas">
        <!-- LinkedIn SVG -->
        <svg @click="openLink('https://www.linkedin.com/in/oriolplazas/')" preserveAspectRatio="xMidYMid"
            viewBox="0 0 256 256">
            <path
                d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
                fill="#0A66C2" />
        </svg>

        <!-- GitHub SVG -->
        <svg @click="openLink('https://github.com/oriioll')" viewBox="0 0 1024 1024" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                transform="scale(64)" fill="#ffff" />
        </svg>

        <Transition name="fade" mode="out-in">
            <a class="openCv" :key="locale" href="/CV_Oriol_Plazas.pdf" target="_blank">{{ t('hero.openCv') }}</a>
        </Transition>

        <div class="mail">
            <p>{{ EMAIL }}</p>
            <!--Copy to clipboard SVG - Only if not copied -->
            <svg v-if="!copied" @click="cpText(EMAIL)" class="cpSvg" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <g fill="none" stroke="var(--accent-ui)" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2">
                    <path
                        d="M7 9.667A2.667 2.667 0 0 1 9.667 7h8.666A2.667 2.667 0 0 1 21 9.667v8.666A2.667 2.667 0 0 1 18.333 21H9.667A2.667 2.667 0 0 1 7 18.333z" />
                    <path d="M4.012 16.737A2 2 0 0 1 3 15V5c0-1.1.9-2 2-2h10c.75 0 1.158.385 1.5 1" />
                </g>
            </svg>
            <svg v-else class="successSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="var(--accent-ui)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
            </svg>
        </div>
    </section>
</template>
<style scoped>
.ctas {
    width: 90%;
    max-width: 100%;
    padding: 0 2rem;          
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    box-sizing: border-box;
    flex-wrap: wrap;
}

.ctas svg {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: all .25s ease-out;
}

.ctas svg:hover {
    transform: translateY(-2px);
}

.openCv {
    text-decoration: none;
    padding: .8rem 1.5rem;
    border: solid 1px var(--accent-ui);
    border-radius: 10px;
    background-color: rgba(236, 143, 92, 0.1);
    font-weight: bold;
    color: var(--accent-ui);
    transition: all .25s ease-out;
}

.openCv:hover {
    filter: brightness(1.2);
    transform: translateY(-2px);
}

.mail {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: .75rem;
    border: solid 1px var(--accent-ui);
    border-radius: 10px;
    background-color: rgba(236, 143, 92, 0.1);
    padding: .8rem 1.5rem;
    color: var(--accent-ui);
    font-weight: 600;
}

.mail .cpSvg {
    width: 1.25rem;
    height: 1.25rem;
    animation: all .3s ease;
}
.mail .cpSvg:hover {
    animation: all .3s ease;
    transform: translateY(0);
}

.mail .successSvg {
    width: 1.25rem;
    height: 1.25rem;
    pointer-events: none;
    animation: all .3s ease;
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

    a,
    p {
        font-size: .9rem;
    }

    .ctas svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    .ctas {
        gap: 1rem;
    }

    .openCv,
    .mail {
        padding: .4rem .8rem;
    }

    .mail .cpSvg {
        width: 1rem;
        height: 1rem;
    }

    .mail .successSvg {
        width: 1rem;
        height: 1rem;
        pointer-events: none;
    }

}

/* Smaller devices */
@media (max-width: 550px) {
    a, p {
        font-size: .8rem;
        font-weight: 600;
    }

    .ctas {
        gap: 1rem;
        width: 90%;
    }

    .ctas svg {
        width: 1.2rem;
        height: 1.2rem;
    }

    .openCv,
    .mail {
        padding: 0.3rem 0.6rem;
        font-size: 0.75rem;
    }

    .mail .cpSvg,
    .mail .successSvg {
        width: 0.8rem;
        height: 0.8rem;
    }
}

/* Extra small devices */
@media (max-width: 380px) {
    a, p {
        font-size: .7rem;
        font-weight: 600;
    }

    .ctas {
        width: 90%;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .ctas svg {
        width: 1rem;
        height: 1rem;
    }

    .openCv,
    .mail {
        padding: 0.25rem 0.5rem;
        font-size: 0.65rem;
    }

    .mail .cpSvg,
    .mail .successSvg {
        width: 0.7rem;
        height: 0.7rem;
    }
}
</style>