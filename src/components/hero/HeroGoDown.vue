<script setup lang="ts">
</script>
<template>
    <section id="goDown" class="goDown">
        <svg id="svg" class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 7">
            <path fill="#ffffff"
                d="M8 6.5a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l4.15 4.15l4.14-4.14c.2-.2.51-.2.71 0s.2.51 0 .71l-4.5 4.5c-.1.1-.23.15-.35.15Z" />
        </svg>
    </section>

</template>
<style scoped>
/*MEDIA QUERIES - Responsive*/
.goDown {
    padding: .5rem;
    border: solid 2px var(--accent-ui);
    border-radius: 50%;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.goDown .svg {
    height: 1.5rem;
    stroke: var(--accent-ui);
}
/* Small devices */
@media (max-width: 1000px) {
    .goDown {
        display: none;
    }
}

/* Smaller devices */
@media (max-width: 550px) {
}

</style>