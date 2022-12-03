<script>
    import Hero from "../components/Hero.svelte";
    import LeftRight from "../components/LeftRight.svelte";
    import Feature from "../components/Feature.svelte";
    import Contribute from "../components/Contribute.svelte";
</script>

<main>
    <Hero/>
    <LeftRight/>
    <Feature title="Meet our sponsors" logos={[
        {
            "name": "packetframe",
            "link": "https://packetframe.com",
            "width": 100,
            "height": 100,
        },
                {
            "name": "betteruptime",
            "link": "https://betteruptime.com",
            "width": 162,
            "height": 65,
        }
    ]}/>
    <Feature title="And some of our partners" logos={[
        {
           "name": "aviator",
            "link": "https://github.com/natesales/aviator",
            "width": 100,
            "height": 100,
        }
    ]}/>
    <Contribute/>
</main>
