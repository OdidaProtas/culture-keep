<script>
	export let data = {};

	// @ts-ignore
	const { words = [] } = data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<span class="welcome text-center ">
		<!-- <source srcset={welcome} type="image/webp" /> -->

		<h1
			class="mb-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-700"
		>
			DHOLUO Dictionary
		</h1>
		<p
			class="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
		>
			Inspired by JUOGI. REDISCOVERING HISTORY, CULTURE & FOLKLORE of the LUO of East & Central
			Africa
		</p>
		<form action="/search">
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
					class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Search..."
					required
				/>
				<button
					type="submit"
					class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>Search</button
				>
			</div>
		</form>
	</span>
</section>

<div>
	<div class="text-left mt-10">
		<p class="text-lg">Discover</p>
	</div>

	<div class="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
		{#each words as word}
			<div class="mt-4 bg-blue-200 rounded  p-4">
				<div class="card text-left w-full bg-primary text-primary-content pt-10">
					<div class="card-body">
						<h2 class="card-title  text-lg ">{word.word} - ({word.dialect})</h2>
						<p class="my-3">{word.definition}</p>
						<h2 class="text-lg my-2">Example</h2>
						<p>{word.example}</p>
						<h2 class="text-lg my-2">Translations</h2>
						<p>English: {word.english}</p>
						<p>Swahili: {word.swahili}</p>

						<div class="mt-4">
							<a
								style="text-decoration: none;"
								href="{`/store?q=${word.word}`}"
								class="text-white mt-4  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>Get merchandise with "{word.word}"
							</a>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}
</style>
