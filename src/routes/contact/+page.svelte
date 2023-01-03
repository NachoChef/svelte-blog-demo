<script>
	// @ts-nocheck

	import { applyAction, deserialize } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	export let form;

	// Standard onSubmit event
	async function handleForm(event) {
		// this === form element
		// creating form data
		const data = new FormData(this);
		// send our own fetch post req
		const res = await fetch(this.action, {
			method: 'POST',
			body: data
		});

		// get data via deserialization
		const result = deserialize(await res.text());

		// check for success, if uccess then reload all data
		if (result.type === 'success') {
			// reloads all data (invalidateAll can be used anywhere)
			await invalidateAll();
		}

		// populate form, will redirect if thrown redirect in action
		// show error page if thrown error
		applyAction(result);
	}
</script>

{#if form?.error_message}
	<p>
		{form.error_message}
	</p>
{:else if form?.message}
	<p>{form.message}</p>
{:else}
	<!-- <form
		use:enhance={({ form, data, action, cancel }) => {
			// form -> form element
			// data -> formdata object
			// action -> url form posts to || can't have a default and named action
			// cancel() -> cancels the form from submtting
			return ({ result, update }) => {
				// result -> 'actionresult'
				// update() -> runs all of the default use:enhance stuff
				update();
			};
		}}
		action="/contact?/email"
		method="POST"
	> -->
	<form on:submit|preventDefault={handleForm} action="/contact?/email">
		<!-- Action = route + ?/ + action_name -->
		<label>
			Name: <input type="text" required name="name" id="name" />
		</label>
		<label>
			Email: <input type="email" required name="email" id="email" />
		</label>
		<label>
			Message: <textarea required name="message" id="message" />
		</label>
		<button type="submit">Send Email</button>
	</form>

	<style>
		form {
			padding: 20px;
			display: flex;
			gap: 20px;
			flex-direction: column;
		}

		label {
			display: block;
		}
	</style>
{/if}
