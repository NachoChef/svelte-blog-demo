<script>
	import { goto } from '$app/navigation';
	// lifecycle, includes afterNavigate, beforeNavigate
	// disableScrollHandling - Sveltekit's built-in scroll handling
	// goto -> programatically routing (do something, then do something after that)
	// invalidate -> load functions on active page re-run
	// invalidateAll -> causes all load functions to re-run (invalidate is targeted/prob faster)
	// preloadCode -> load js code for given routes
	// preloadData -> load data from load functions for given routes

	import {browser, building, dev, version} from '$app/environment'
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import './styles.css';
	import Episodes from './Episodes.svelte';

	/**
	 * @type {any}
	 */
	 export let data;
	$: ({ all_episodes } = data);
	console.log(browser, building, dev, version);
	// order of most-least probable usage
	// browser -> boolean, if app is running in browser
	// dev -> boolean, if in development (like npm run dev)
	// building -> boolean, true if currently building for production
	// version -> config.kit.version.name, epoch time to measure when app has updated
</script>

<Header />

<!-- {#if $navigating}
	<div class="loading">Loading</div>
{/if} -->

<main>
	<div class="main">
		<!-- <button on:click={() => goto('/contact')}>Contact</button> -->
		<slot />
	</div>
	<aside>
		<Episodes episodes={all_episodes} />
	</aside>
</main>

<Footer />

<style lang="postcss">
	main {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 20px;
	}

	aside {
		order: -1;
	}

	.loading {
		position: fixed;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: blue;
		color: white;
	}
</style>
