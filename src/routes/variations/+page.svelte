<script>
	import Form from './variationFormDialog/Form.svelte';
	let formOpen = false;

	function toggleForm(){
		formOpen = !formOpen
	}
</script>

<div class="">
	<h1>LUO Dialects</h1>
	<div class=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
		<button
			on:click={toggleForm}
			type="button"
			class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
			>Add Variation
		</button>
	</div>
	<div class="d">
		{#if formOpen}
			<Form toggleForm={toggleForm} />
		{/if}
	</div>
</div>
