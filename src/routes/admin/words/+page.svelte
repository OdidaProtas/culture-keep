<script>
	// @ts-nocheck

	export let data = { words: [] };
	const { words } = data;
	const hasWords = Boolean(words.length);

	import { page } from '$app/stores';
	let q = $page.url.searchParams.get('q');
	let user = $page.data.session?.user
</script>

{#if !hasWords}
	<div class="text-center text-lg mt-9">
		{#if !q}
			<p>No words have been flagged</p>
		{:else}
			<p>No search results for {q}</p>
		{/if}
		<div class="mt-4"><a href="/define">Define words</a></div>
	</div>
{/if}

<div class="flex mt-20 justify-between text-lg lg:px-48">
	<div class="mt-4">
		<p> {words.length} <span class="text-lg text-red-500">Flagged</span> Words</p>
	</div>
	<div class="mt-4" />
</div>

<div class="lg:px-48 mt-7">
	{#each words as word, index}
		<a href={`/admin/words/${word.id}`}>
			{index + 1}. {word.word}
		</a>
	{/each}
</div>
