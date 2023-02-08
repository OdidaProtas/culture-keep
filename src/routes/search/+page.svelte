<script>
	// @ts-nocheck

	/** @type {import('./$types').PageData} */
	export let data;

	let dialects = {
		all: 'All',
		joluo: 'Joluo (Kenya & Tanzania)'
	};
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
			{data.definition}
		</p>
		<h2 class="text-lg my-2">Example</h2>
		<p class="my-4">
			{data.example}
		</p>
		<hr />
		<h2 class="text-lg my-2">Translations</h2>
		<p class="mt-9">English : {data.english}</p>
		<p>Swahili : {data.swahili}</p>
		<div class="mt-9">
			<a
				href={`/store?q=${data.word}`}
				class="text-white bg-blue-700 hover:bg-blue-800 mt-5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Shop tshirts / hoodies / mugs written {data.word}</a
			>
		</div>
	{/if}
	{#if !data.word}
		<h1>Missing word</h1>
		<p>The word hasn't been defined in the dictionary.</p>
		<div class="text-center mt-6">
			<a href="/define">Define this word</a>
		</div>
	{/if}
</div>
