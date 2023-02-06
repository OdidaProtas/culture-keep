<script>
	// @ts-nocheck

	/** @type {import('./$types').PageData} */
	export let data;

	let dialects = {
		all: 'All',
		joluo: 'Joluo (Kenya & Tanzania)'
	};

	console.log(data);
</script>

<svelte:head>
	<title>Search</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	{#if data.word}
		<h1>{data.word}</h1>
		<p>Dialect: {dialects[data.dialect]}</p>
		<p class="mt-8">
			Definition: {data.definition}
		</p>
		<p class="my-4">
			Example usage: {data.example}
		</p>
		<hr />
		<p class="mt-9">English Translation: {data.english}</p>
		<p>Swahili Translation: {data.swahili}</p>
	{/if}
	{#if !data.word}
		<h1>Missing word</h1>
		<p>The word hasn't been defined in the dictionary.</p>
		<div class="text-center mt-6">
			<a href="/define">Define this word</a>
		</div>
	{/if}
</div>
