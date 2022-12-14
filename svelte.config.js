import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import(""@sveltejs/kit").Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		prerender: { default: true },
		paths: {
			// change below to your repo name
			// was "@sveltejs/adapter-auto"
			base: process.env.NODE_ENV === 'development' ? '' : '/urban-octo-doodle'
		}
	}
};

export default config;
