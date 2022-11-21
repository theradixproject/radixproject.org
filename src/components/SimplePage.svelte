<script>
    import Img from "./Img.svelte";
    export let img = "";
</script>

<main>
    <div class="img">
        <Img themed svg src={img === "" ? "logo" : img}/>
    </div>

    <h2 class="heading-title">
        <slot name="title"></slot>
    </h2>

    <slot name="content"></slot>
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

    .img {
        width: 100px;
        padding: 35px;
        margin: auto;
    }
</style>
