<script>
    export let title;
    export let logos = {};
</script>

<main>
    <h2 class="heading-title">{title}<span class="dot">.</span></h2>

    <div class="container">
        {#each logos as logo}
            <a href={logo.link} class="feature">
                <img style="width: {logo.width}px; height={logo.height}px" src="logos/{logo.name}.png" alt={logo.name + " logo"}/>
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
        text-align: center;
    }

    .container {
        height: 170px;
        width: 100%;
        background-color: white;
        border-radius: 16px;
        border: 3px solid black;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    a {
        color: white;
    }
</style>
