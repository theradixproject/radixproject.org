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
        margin-left: 35px;
        margin-right: 35px;
        color: white !important;
        background-color: black !important;
        display: flex;
        flex-direction: column;
    }

    @media (prefers-color-scheme: light) {
        main {
            color: black !important;
            background-color: white !important;
        }
    }
</style>
