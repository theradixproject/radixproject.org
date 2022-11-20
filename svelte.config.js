import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";
import {mdsvex} from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".mdx"],
	preprocess: [
		mdsvex({
			extensions: [".mdx"],
			layout: {
				simple: "./src/components/SimplePageWrapper.svelte",
			},
		}),
		preprocess()
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
