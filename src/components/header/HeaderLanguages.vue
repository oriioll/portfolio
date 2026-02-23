<script setup lang="ts">

</script>
<template>
    <aside>
        <!--SPAIN FLAG SVG-->
        <svg class="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
            <g id="color">
                <rect x="5" y="17" width="62" height="38" fill="#f1b31c" />
                <path fill="#d22f27" d="M23,33v7a2.0059,2.0059,0,0,1-2,2H17a2.0059,2.0059,0,0,1-2-2V33" />
                <rect x="5" y="17" width="62" height="9" fill="#d22f27" />
                <rect x="5" y="46" width="62" height="9" fill="#d22f27" />
                <rect x="19" y="33" width="4" height="4" fill="#f1b31c" />
                <circle cx="19" cy="37" r="1.5" fill="#6a462f" />
                <g>
                    <line x1="27" x2="27" y1="33" y2="42" fill="none" stroke="#6a462f" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2" />
                    <line x1="11" x2="11" y1="33" y2="42" fill="none" stroke="#6a462f" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2" />
                    <path fill="none" stroke="#6a462f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15,30a8.5678,8.5678,0,0,1,4-1" />
                    <path fill="none" stroke="#6a462f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M23,30a8.5678,8.5678,0,0,0-4-1" />
                    <line x1="15" x2="23" y1="33" y2="33" fill="none" stroke="#6a462f" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2" />
                    <path fill="none" stroke="#6a462f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M23,33v7a2.0059,2.0059,0,0,1-2,2H17a2.0059,2.0059,0,0,1-2-2V33" />
                    <line x1="10" x2="12" y1="42" y2="42" fill="none" stroke="#6a462f" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2" />
                    <line x1="26" x2="28" y1="42" y2="42" fill="none" stroke="#6a462f" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2" />
                </g>
            </g>
            <g id="line">
                <rect x="5" y="17" width="62" height="38" fill="none" stroke="#232323" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>

        <!--UK FLAG SVG-->
        <svg class="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
            <g id="color">
                <rect x="5" y="17" width="62" height="38" fill="#1e50a0" />
                <g>
                    <polygon fill="#fff" points="40 28.856 40 32 50.181 32 67 21.691 67 17 59.346 17 40 28.856" />
                    <polygon fill="#d22f27" points="67 17 67 17 63.173 17 40 31.203 40 32 43.482 32 67 17.586 67 17" />
                    <polygon fill="#fff" points="59.347 55 67 55 67 55 67 50.308 50.182 40 40 40 40 43.143 59.347 55" />
                    <polygon fill="#d22f27" points="67 55 67 52.653 46.355 40 41.568 40 66.042 55 67 55 67 55" />
                    <polygon fill="#fff" points="32 43.144 32 40 21.819 40 5 50.309 5 55 12.654 55 32 43.144" />
                    <polygon fill="#d22f27" points="5 55 5 55 8.827 55 32 40.797 32 40 28.518 40 5 54.414 5 55" />
                    <polygon fill="#fff" points="12.653 17 5 17 5 17 5 21.692 21.818 32 32 32 32 28.857 12.653 17" />
                    <polygon fill="#d22f27" points="5 17 5 19.347 25.646 32 30.432 32 5.958 17 5 17 5 17" />
                    <rect x="5" y="31" width="62" height="10" fill="#fff" />
                    <rect x="31" y="17" width="10" height="38" fill="#fff" />
                    <rect x="5" y="33" width="62" height="6" fill="#d22f27" />
                    <rect x="33" y="17" width="6" height="38" fill="#d22f27" />
                </g>
            </g>
            <g id="line">
                <rect x="5" y="17" width="62" height="38" fill="none" stroke="#232323" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>

        <!--CATALONIA FLAG SVG-->
        <svg class="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
            <g id="color">
                <rect x="5" y="17" width="62" height="38" fill="#f1b31c" />
                <rect x="5" y="22" width="62" height="4" fill="#d22f27" />
                <rect x="5" y="30" width="62" height="4" fill="#d22f27" />
                <rect x="5" y="38" width="62" height="4" fill="#d22f27" />
                <rect x="5" y="46" width="62" height="4" fill="#d22f27" />
            </g>
            <g id="line">
                <rect x="5" y="17" width="62" height="38" fill="none" stroke="#232323" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2" />
            </g>
        </svg>

    </aside>
</template>
<style scoped>
aside {
    scroll-behavior: smooth;
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.emoji {
    width: 4rem;
    height: auto;
    cursor: pointer;
    transition: all .3s ease-in-out;
}

.emoji:hover {
    transform: scale(1.075);
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