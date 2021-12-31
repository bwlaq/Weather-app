import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'beautiful world',
		catSrc:'https://http.cat/404'
	}
});

export default app;