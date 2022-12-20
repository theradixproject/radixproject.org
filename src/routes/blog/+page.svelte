<script>
    import SimplePage from "../../components/SimplePage.svelte";
    import {pages} from "./mdp-meta.js";
</script>

<SimplePage>
    <div class="center" slot="title">
        The Radix Blog<span class="dot">.</span>
    </div>

    <div class="center" slot="content">
        {#each Object.values(pages).sort((a, b) => { // Sort the blog posts by date
            let ad = new Date(a.date);
            let bd = new Date(b.date);
            if (ad < bd) {
                return 1
            } else if (ad > bd) {
                return -1
            } else {
                return 0
            }
        }) as page}
            {#if !page.hidden}
                <div class="post">
                    <a href="/blog/{page.link}"><h2>{page.title}</h2></a>
                    <span>{page.date}</span>
                </div>
            {/if}
        {/each}
    </div>
</SimplePage>

<style>
    h2 {
        color: var(--color-purple);
        font-size: 24px;
        font-weight: bold;
        margin: 5px;
    }

    .post {
        margin: 20px;
        padding-top: 10px;
        padding-bottom: 20px;
        border-top: 1px white solid;
        border-bottom: 1px white solid;
    }
</style>
