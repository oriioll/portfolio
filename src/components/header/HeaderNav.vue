<script setup lang="ts">
</script>
<template>
    <nav>
        <ul>
            <li><a href="#me">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a id="cta" href="#contact">Contact</a></li>
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