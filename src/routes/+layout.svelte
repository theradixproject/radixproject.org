<script>
    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";
    import {light} from "../stores.js";
</script>

<svelte:head>
    {#if $light}
        <style lang="scss">
            body {
                color: black;
                background-color: white !important;
            }
        </style>
    {:else}
        <style lang="scss">
            body {
                color: white !important;
                background-color: black !important;
            }
        </style>
    {/if}
</svelte:head>

<main class:light={$light}>
    <Navbar/>
    <slot></slot>
    <Footer/>
</main>

<style>
    main {
        min-height: 100vh;
        margin: 0;
        color: white !important;
        background-color: black !important;
        display: flex;
        flex-direction: column;
    }

    main.light {
        color: black !important;
        background-color: white !important;
    }
</style>
