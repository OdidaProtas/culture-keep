<script>
	// @ts-nocheck

	/** @type {import('./$types').PageData} */
	export let data;

	const exampleS = data?.example?.split(' ') ?? [];

	const exampleHtml = exampleS.reduce((prev, curr, index) => {
		if (curr.toLowerCase() === data?.word?.toLowerCase()) {
			curr = `<a href="/search?q=${curr}">${curr}</a>`;
		}
		if (index === 0) {
			return `<p>${curr} `;
		}
		if (index === exampleS.length) {
			return prev + 0` ${curr}</p>`;
		}
		return prev + ` ${curr} `;
	}, '');

	let dialects = {
		all: 'All',
		joluo: 'Joluo (Kenya & Tanzania)'
	};

	import { page } from '$app/stores';
	const q = $page.url.searchParams.get('q');

	let variations = data.Variations;

	let qs = q?.split('') ?? [];

	let uppercased = qs.reduce((prev, c, i) => {
		if (i === 0) return c.toUpperCase();
		return prev + c.toLowerCase();
	}, '');
</script>

<svelte:head>
	<title>Search</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column p-3 rounded-lg">
	{#if data.word}
		<h1 class="text-3xl">{data.word}</h1>
		<div class="flex">
			<form method="POST">
				<input type="hidden" value={!data.deleted} id="delete" name="delete" />
				<input type="hidden" value={'delete'} id="action" name="action" />
				<button class="bg-red-500 p-2 text-sm rounded-3xl text-white">
					{data.deleted ? 'Restore word' : 'Delete word'}
				</button>
			</form>
			<form method="POST">
				<input type="hidden" value={!data.flagged} id="flag" name="flag" />
				<input type="hidden" value={'flag'} id="action" name="action" />
				<button class="bg-red-500 p-2 rounded-3xl ml-2 text-sm text-white"
					>{data?.flagged ? 'Undo flag' : 'Flag word'}
				</button>
			</form>
			<div class="pt-1">
				<a
					class="bg-blue-500 p-2 px-4  hover:no-underline rounded-3xl ml-2 text-sm text-white"
					href={`/define?word=${data?.word}&edit=true`}>Edit</a
				>
			</div>
		</div>

		<hr />
		<p class="mt-8 mb-8">
			{data.definition}
		</p>
		<hr />
		<p class="my-4 text-sm">
			<span class=" my-2">Example in a sentence: </span>
		</p>
		{@html exampleHtml}
		<p class="mt-3" />
		<div class="mb-4">
			<p class="mt-9">English : {data.english}</p>
			<p>Swahili : {data.swahili}</p>
		</div>

		<hr />
		<div class="my-3">
			<p class="text-sm">
				This word is available in <span class="text-lg text-blue-800"
					>{dialects[data.dialect]} Dholuo dialects</span
				>
			</p>
		</div>

		{#if variations?.length}
			<div class="my-3">
				<p class="text-sm">
					Discover {data.word} in oher dialects
				</p>
				{#each variations as variation, index}
					<div class="bg-blue-600 text-white p-2 rounded-lg flex mt-2 justify-between">
						<p>{index + 1}. {variation.dialect}</p>
						<p>{variation.word}</p>
					</div>
				{/each}
			</div>
		{/if}
	{/if}

	{#if !data.word}
		<h1>"{q}" not found</h1>
		<div class="text-center mt-20">
			<p>
				If this is a valid <a href="/search?q=dholuo">Dholuo</a> word, it could be that it hasn't been
				defined yet, or you can again with a different spelling .
			</p>
		</div>
		<div class="text-center mt-6 bg-green-200 rounded-3xl p-2">
			<a class="hover:no-underline text-lg" href={`/define?word=${q}`}>Define "{q}"</a>
			<p />
			<small>Signin required</small>
		</div>
	{/if}
</div>
