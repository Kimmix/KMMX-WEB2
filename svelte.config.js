import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from 'svelte-adapter-deno';

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter()
  }
}
