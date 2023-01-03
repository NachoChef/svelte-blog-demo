<script>
	import '$db/start';
	export let data;

	// $: console.log($navigating, $page);

	$: ({ latest_episode } = data);
</script>

<h3>{latest_episode.title}</h3>
