<script>
    import Navbar from "../components/Navbar.svelte";
    import Hero from "../components/Hero.svelte";
    import LeftRight from "../components/LeftRight.svelte";
    import Feature from "../components/Feature.svelte";
    import Footer from "../components/Footer.svelte";
    import Contribute from "../components/Contribute.svelte";
</script>

<main>
    <Navbar/>
    <Hero/>
    <LeftRight/>
    <Feature title="Meet our sponsors"/>
    <Feature title="And some of our partners"/>
    <Contribute/>
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
