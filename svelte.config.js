import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";
import { fsindexer } from "./fsindexer.js";

/** @type {import('@sveltejs/kit').Config} */
export default {
  extensions: [".svelte", ".mdx"],
  preprocess: [
      fsindexer(),
      mdsvex({
          extensions: [".mdx"],
          layout: {
              blog: "./src/components/BlogLayout.svelte",
          },
      }),
  ],

  kit: {
    adapter: adapter(),
  },
};
