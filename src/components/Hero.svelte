<script>
    import Img from "./Img.svelte";
</script>

<main>
    <div class="row">
        <div class="img">
            <Img themed src="splash"/>
        </div>
        <div class="col">
            <h1>The Radix Project</h1>
            <p class="mono sub">Your one-stop shop for supercharging open source.</p>
        </div>
    </div>

    <a href="/apply" class="gradient-border">Apply for Hosting Now</a>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 35px;
        margin-bottom: 55px;
    }

    .col {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-left: 25px;
    }

    @media screen and (max-width: 600px) {
        .col {
            margin-left: 0;
        }

        h1 {
            text-align: center !important;
        }
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

    .sub {
        text-align: center;
    }
</style>