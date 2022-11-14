<script>
    import Hero from "../components/Hero.svelte";
    import LeftRight from "../components/LeftRight.svelte";
    import Feature from "../components/Feature.svelte";
    import Contribute from "../components/Contribute.svelte";
</script>

<main>
    <Hero/>
    <LeftRight/>
    <Feature title="Meet our sponsors" logos={["packetframe"]}/>
    <Feature title="And some of our partners" logos={["aviator"]}/>
    <Contribute/>
</main>
