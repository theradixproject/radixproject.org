<script>
    export let title;
    export let name;
    export let user;
</script>

<main>
    <img src="people/{user}.png" alt="{name} Profile Picture">
    <h3><span>{title}</span> {name}</h3>
    <a class="mono" href="mailto:{user}@radixproject.org">{user}@radixproject.org</a>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 1rem;
    }

    img {
        width: 175px;
        height: 175px;
        border-radius: 50%;
        margin-bottom: 1rem;
        border: 4px solid var(--color-purple);
    }

    span {
        color: var(--color-purple);
    }

    h3 {
        margin: 2px;
    }
</style>
