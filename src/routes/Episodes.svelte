<script>
	import { onMount } from 'svelte';

	export let episodes;
</script>

<nav>
	<ul>
		{#each episodes as episode}
			<li>
				<a href={`/show/${episode.number}`}>{episode.title}</a>
			</li>
		{/each}
	</ul>
</nav>
