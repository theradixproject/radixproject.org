<script>
    import {light} from "../stores.js";
</script>

<main>
    <a class:light={$light} class="nav-link" href="/">HOME</a>
    <a class:light={$light} class="nav-link" href="/news">NEWS</a>
    <a class:light={$light} class="nav-link" href="/about">ABOUT</a>
    <a class:light={$light} class="nav-link" href="/apply">APPLY</a>
    <a class:light={$light} class="nav-link" href="/contribute">CONTRIBUTE</a>
</main>

<style>
    main {
        display: flex;
        justify-content: center;
        margin: 25px;
    }

    a {
        display: flex;
        font-weight: 800 !important;
    }
</style>
