<script>
    import {light} from "../stores.js";

    export let src, alt
    export let themed = false
</script>

<picture>
    {#if themed}
        <source type="image/avif" srcset="/{src}_{$light ? 'light' : 'dark'}.avif">
        <img alt={alt} src="/{src}_{$light ? 'light' : 'dark'}.png">
    {:else}
        <source type="image/avif" srcset="/{src}.avif">
        <img alt={alt} src="/{src}.png">
    {/if}
</picture>

<style>
    img, picture {
        width: inherit;
        height: inherit;
    }
</style>
