import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import process from 'process';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		prerender: {
			crawl: true,
			entries: ['/']
		},
		paths: {
			base: process.env.BASE_URL || ''
		},
		router: false,
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
