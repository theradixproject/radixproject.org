<script>
    import Img from "./Img.svelte";

    export let title;
    export let logos = {};
</script>

<main>
    <h2 class="heading-title">{title}<span class="dot">.</span></h2>

    <div class="container">
        {#each Object.keys(logos) as logo}
            <a href={logos[logo]} class="feature">
                <Img src="logos/{logo}"/>
            </a>
        {/each}
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 45px;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 25px;
    }

    .container {
        height: 170px;
        width: 100%;
        background-color: white;
        border-radius: 16px;
        border: 3px solid black;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    a {
        color: white;
        height: 100px;
        width: 100px;
    }
</style>