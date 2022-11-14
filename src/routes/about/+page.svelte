<script>
    import Person from "./Person.svelte";
    import Img from "../../components/Img.svelte";
</script>

<main>
    <div class="img">
        <Img themed src="logo"/>
    </div>

    <h2 class="heading-title">Our goal: be the one-stop shop for</h2>
    <h2 class="heading-title">supercharging open source<span class="dot">.</span></h2>

    <p class="mono">
        The Radix Project aims to provide free-of-charge, accessible, tailored hosting for FLOSS & open source projects via a dedicated team that strives to ensure each project’s needs are met. Many open source projects are abandoned due to a lack of resources, and the Radix Project helps remedy this by guaranteeing reliable hosting to our partners who deserve nothing less.

        In the future, we hope to offer more to FLOSS & open source projects as well as find innovative ways to invigorate the world of open source and spur on digital freedom beyond hosting.
    </p>

    <div class="row">
        <Person title="CEO" name="Gianni Rosato" user="gianni"/>
        <Person title="CTO" name="Nate Sales" user="nate"/>
    </div>

    <p class="mono contact">Or contact us at <a class="mono" href="mailto:contact@radixproject.org">contact@radixproject.org</a></p>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 1rem;
    }

    h2 {
        font-size: 2em;
        text-align: left !important;
    }

    a {
        text-decoration: underline;
    }

    .contact {
        text-align: center;
        color: white;
    }

    .contact a {
        color: white;
        text-decoration: none;
    }

    .img {
        width: 100px;
        padding: 35px;
        margin: auto;
    }
</style>
