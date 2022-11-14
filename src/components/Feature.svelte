<script>
    export let title;
</script>

<main>
    <h2 class="heading-title">{title}<span class="dot">.</span></h2>

    <div class="container">
        <div class="feature"></div>
        <div class="feature"></div>
        <div class="feature"></div>
        <div class="feature"></div>
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
        height: 200px;
        width: 100%;
        background-color: #6d6d6d;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    .feature {
        height: 100px;
        width: 100px;
        background-color: #484848;
        border-radius: 50%;
    }
</style>