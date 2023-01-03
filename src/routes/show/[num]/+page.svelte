<script>
	export let data;

	$: ({ episode, user } = data);
</script>

<h1>{episode.title}</h1>
<h1>User: {user.email}</h1>
{@html episode.html}
