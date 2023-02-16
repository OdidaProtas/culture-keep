<script>
	export let data = {};

	// @ts-ignore
	const { words = [] } = data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="lg:mx-18">
	<span class="text-center pt-9 ">
		<h1 class="mt-9" >Dholuo Dictionary</h1>


		<form class="lg:px-48" action="/search">
			<label
				for="default-search"
				class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label
			>
			<div class="relative">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						aria-hidden="true"
						class="w-5 h-5 text-gray-500 dark:text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
				</div>
				<input
					type="search"
					id="q"
					name="q"
					class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl mt-24 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Search in DHOLUO, English or Swahili..."
					required
				/>
				<button
					type="submit"
					class="text-white rounded-3xl absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>Search</button
				>
			</div>
		</form>
	</span>
</section>

<div class="p-4 justify-center flex mt-8 text-lg">
	<a href="/define">Add definitions</a>
	<a class="pl-4" href="/learn">Learn Dholuo</a>
	<a class="pl-4" href="/sverdle">Games</a>
</div>

{#if words.length}
	<div class="lg:mx-36">
		<div class="text-left mt-10 ">
			<p class="text-lg">Discover</p>
		</div>

		<div>
			<div class="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
				{#each words as word}
					<a class="text-black" style="text-decoration: none;" href={`/search?q=${word.word}`}>
						<div class="mt-2 bg-blue-200 rounded-lg   p-4 pt-0">
							<div class="card text-left w-full bg-primary text-primary-content pt-3">
								<div class="card-body">
									<h2 class="card-title  text-lg ">{word.word}</h2>
									<hr />
									<p class="my-3">{word.definition}</p>
									<hr />
									<p class="my-2 text-sm">
										<span class="text-lg">Example usage: </span>{word.example}
									</p>
									<hr />
									<div class="text-sm mt-3">
										This word is available in <span class="text-blue-900  text-lg"
											>{word.dialect}</span
										>
										Dholuo dialect(s)
									</div>
								</div>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
{/if}

<style>
	section {
		justify-content: center;
	}

	h1 {
		width: 100%;
	}
</style>
