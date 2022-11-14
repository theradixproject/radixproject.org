<script>
    import Img from "./Img.svelte";
    import {light} from "../stores.js";
</script>

<main>
    <div class="row">
        <div class="img">
            <Img themed src="splash"/>
        </div>
        <div class="col">
            <h1>The Radix Project</h1>
            <p class="mono">Your one-stop shop for supercharging open source.</p>
        </div>
    </div>

    <a href="/apply" class="gradient-border" class:light={$light}>Apply for Hosting Now</a>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 35px;
        margin-bottom: 55px;
    }

    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .col {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-left: 25px;
    }

    .img {
        width: 175px;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin: 0;
        text-align: left;
    }
</style>