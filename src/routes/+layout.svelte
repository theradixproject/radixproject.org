<script>
    import Navbar from "../components/Navbar.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<main>
    <Navbar/>
    <slot></slot>
    <Footer/>
</main>

<style>
    main {
        min-height: 100vh;
        margin: 0;
        color: white;
        background-color: black !important;
        display: flex;
        flex-direction: column;
    }
</style>
