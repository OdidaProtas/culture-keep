<script>
// @ts-nocheck

	export let data = { words: [] };
	const { words } = data;
	const hasWords = Boolean(words.length);
</script>

{#if !hasWords}
	<div class="text-center text-lg mt-9">
		<p>No words have been defined in this dictionary</p>
		<div class="mt-4"><a href="/define">Define words</a></div>
	</div>
{/if}

{#if hasWords}
	<div class="flex justify-between text-lg">
		<div class="mt-4">
			<p>Showing {words.length} Words</p>
		</div>
		<div class="mt-4"><a href="/define">Define words</a></div>
	</div>
{/if}

<div
	class="w-full mt-9 text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
>
	{#each words as word}
		<button
			type="button"
			class="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
		>
			{word.word}
		</button>
	{/each}
</div>
