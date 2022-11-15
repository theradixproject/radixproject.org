<script>
    import Img from "../../components/Img.svelte";

    export let title;
    export let name;
    export let user;
</script>

<main>
   <Img round src="people/{user}" alt="{name} Profile Picture"/>
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

    span {
        color: var(--color-purple);
    }

    h3 {
        margin: 2px;
    }
</style>
