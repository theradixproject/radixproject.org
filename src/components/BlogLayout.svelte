<script>
    import SimplePage from "./SimplePage.svelte";

    export let title;
    export let date;
</script>


<SimplePage>
    <div slot="title" class="center">
        {title}<span class="dot">.</span>
    </div>


    <div slot="content">
        <p class="center" style="margin-bottom: 0;">{date}</p>
        <div class="post">
            <slot/>
        </div>
    </div>
</SimplePage>

<style>
    .post {
        font-size: 14pt;
        line-height: 1.75;
        padding-top: 15px;
        margin: auto;
        max-width: 1000px;
    }

    .post :global(pre) {
        max-width: 100%;
        overflow: scroll;
    }

    .post :global(blockquote) {
        font-style: italic;
    }
</style>
