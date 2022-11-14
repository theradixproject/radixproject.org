<script>
    export let src, alt
    let scheme = "dark"
</script>

<picture>
    <source type="image/avif" srcset="/{src}_{scheme}.avif">
    <img alt={alt} src="/{src}_{scheme}.png">
</picture>

<style>
    img, picture {
        width: inherit;
        height: inherit;
    }
</style>
