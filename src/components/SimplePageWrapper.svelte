<script>
    import SimplePage from "./SimplePage.svelte";

    export let title;
</script>

<SimplePage>
    <div slot="title">
        {title}<span class="dot">.</span>
    </div>
    <div slot="content">
        <slot/>
    </div>
</SimplePage>
