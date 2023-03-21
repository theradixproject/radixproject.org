<script>
    import {onMount} from "svelte";

    export let src, alt
    export let themed = false
    export let round = false
    export let svg = false

    // Get preferred color scheme
    let light = true;
    onMount(() => {
        light = !window.matchMedia('(prefers-color-scheme: dark)').matches
    })
</script>

<picture>
    {#if themed}
        {#if svg}
            <source srcset="/{src}_dark.svg" media="(prefers-color-scheme: dark)">
            <img {alt} class:round src="/{src}_light.svg">
<!--            <img class:round alt={alt} src="/{src}_{light ? 'light' : 'dark'}.svg">-->
        {:else}
            <source srcset="/{src}_dark.avif" media="(prefers-color-scheme: dark)">
            <img {alt} class:round src="/{src}_light.avif">
<!--            <source type="image/avif" srcset="/{src}_{light ? 'light' : 'dark'}.avif">-->
<!--            <img class:round alt={alt} src="/{src}_{light ? 'light' : 'dark'}.png">-->
        {/if}
    {:else}
        {#if svg}
            <img class:round alt={alt} src="/{src}.svg">
        {:else}
            <source type="image/avif" srcset="/{src}.avif">
            <img class:round alt={alt} src="/{src}.png">
        {/if}
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
