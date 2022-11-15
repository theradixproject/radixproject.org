<script>
    import {light} from "../stores.js";

    export let src, alt
    export let themed = false
    export let round = false
</script>

<picture>
    {#if themed}
        <source type="image/avif" srcset="/{src}_{$light ? 'light' : 'dark'}.avif">
        <img class:round alt={alt} src="/{src}_{$light ? 'light' : 'dark'}.png">
    {:else}
        <source type="image/avif" srcset="/{src}.avif">
        <img class:round alt={alt} src="/{src}.png">
    {/if}
</picture>

<style>
    img, picture {
        width: inherit;
        height: inherit;
    }


    .round {
        width: 175px;
        height: 175px;
        border-radius: 50%;
        margin-bottom: 1rem;
        border: 4px solid var(--color-purple);
    }
</style>
