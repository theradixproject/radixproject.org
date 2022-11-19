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
        align-items: center;
        margin: 25px;
    }

    a {
        font-weight: 800 !important;
    }

    @media screen and (max-width: 600px) {
        a {
            padding: 6px;
        }
    }
</style>
