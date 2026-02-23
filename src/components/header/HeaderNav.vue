<script setup lang="ts">
</script>
<template>
    <nav>
        <ul>
            <li><a href="#me">About Me</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a id="cta" href="#contact">Contact Me</a></li>
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

</style>