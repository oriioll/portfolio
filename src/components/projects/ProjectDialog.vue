<script setup lang="ts">
import type Project from "../../data/model/Project";
import { useI18n } from 'vue-i18n';
import { openLink } from '@/utils/navigation';

const { t } = useI18n();
const props = defineProps<{ project: Project }>();
const emit = defineEmits<{
    'close-project': []
}>();

const onClose = () => {
    emit('close-project');
};
</script>
<template>
    <div class="dialog-backdrop" role="presentation" @click.self="onClose" @keydown.esc.window="onClose">
        <article class="project-dialog" role="dialog" aria-modal="true" :aria-label="t(props.project.titleKey)">
            <button class="close-button" type="button" aria-label="Close project preview" @click="onClose">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor"
                        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" />
                </svg>
            </button>
            <img class="project-image" :src="props.project.image" :alt="t(props.project.titleKey)">
            <div class="bottom">
                <p class="project-title">{{ t(props.project.titleKey) }}</p>
                <div class="project-links">
                    <img v-if="props.project.demoUrl" @click="openLink(props.project.demoUrl)"
                        src="/public/icons/link.svg" alt="Demo link" title="Demo">
                    <img @click="openLink(props.project.githubUrl)" src="/public/icons/githublight.svg"
                        alt="Github Repo Link" title="GitHub">
                </div>
            </div>

        </article>
    </div>
</template>
<style scoped>
.dialog-backdrop {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: grid;
    place-items: center;
    padding: 1.25rem;
    background: rgb(0 0 0 / 82%);
}

.project-dialog {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: min(900px, 100%);
    max-height: calc(100dvh - 2.5rem);
    overflow-y: auto;
    padding: 1.25rem;
    border: 1px solid var(--accent-ui);
    border-radius: 12px;
    background: var(--bg-primary);
    box-shadow: 0 1.5rem 5rem rgb(0 0 0 / 45%);
}

.close-button {
    display: grid;
    place-items: center;
    align-self: flex-end;
    width: 1.875rem;
    height: 1.875rem;
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--txt-primary);
    cursor: pointer;
    transition: color .2s ease;
}

.close-button:hover {
    color: var(--accent-ui);
}

.close-button svg {
    width: 100%;
    height: 100%;
}

.project-image {
    width: 100%;
    max-height: 65dvh;
    border-radius: 6px;
    object-fit: contain;
}

.project-title {
    font-size: var(--step-1);
    font-weight: 600;
}

.project-links {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    padding: .75rem;
    border: 1px solid var(--accent-ui);
    border-radius: 6px;
}

.project-links img {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    transition: transform .3s ease-out;
}

.project-links img:hover {
    transform: translateY(-2px);
}

.bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

@media (max-width: 550px) {
    .dialog-backdrop {
        padding: .75rem;
    }

    .project-dialog {
        max-height: calc(100dvh - 1.5rem);
        padding: .75rem;
    }

    .project-image {
        max-height: 70dvh;
    }
}
</style>