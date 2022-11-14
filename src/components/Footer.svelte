<script>
    import {light} from "../stores.js";

    let links = ["donate", "contact", "privacy", "terms"]
</script>

<footer>
    {#each links as link, i}
        <a class="nav-link" class:light={$light} href="/{link}">{link[0].toUpperCase() + link.slice(1)}</a>{#if i !== links.length - 1}<span class="spacer">|</span>{/if}
    {/each}
    <p>&copy; The Radix Project 2022.</p>
</footer>

<style>
    footer {
        text-align: center;
        margin: 25px;
        padding-bottom: 20px;
    }

    a {
        padding-left: 5px;
        padding-right: 5px;
        font-size: 14px;
        font-weight: 500;
    }

    .spacer {
        color: #999999;
    }

    p {
        margin-top: 10px;
    }
</style>