<script>
    import SimplePage from "../../components/SimplePage.svelte";
</script>

<SimplePage>
    <div class="center" slot="title">
        Contact<span class="dot">.</span>
    </div>
    <div class="center" slot="content">
        <br>
        <p>Email: <a class="mono" href="mailto:contact@radixproject.org">contact@radixproject.org</a></p>
        <p>Mastodon: <a class="mono" href="https://masto.ai/@radix">@radix@masto.ai</a></p>
    </div>
</SimplePage>

<style>
    p {
        margin: 0;
    }
</style>
