<script>
	// @ts-nocheck

	/** @type {import('./$types').ActionData} */
	export let form;

	let state = {
		type: 'word'
	};

	function handleChange(e) {
		state = { ...state, [e.target.name]: e.target.value };
	}

	import { page } from '$app/stores';

	let user = $page.data.session?.user;
</script>

<svelte:head>
	<title>Define words</title>
	<meta name="description" content="About this app" />
</svelte:head>

{#if !user}
	<div class="text-center text-lg mt-20">You must be logged in to define missing words</div>
	<div class="text-center mt-9">
		<a href="/" class="mt-9">Take me back to the home page</a>
		<p class="mt-8" />
		<a href="/auth/signin" class="mt-9">Sign in</a>
	</div>{/if}

{#if user}
	<div class="">
		{#if form?.success}
			<div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
				<p class="font-bold">Success</p>
				<p>Definition entry has been added</p>
			</div>
		{/if}
		<h1>Define a word</h1>
		<p class="mb-6">
			All words in <a target="blank" href="/">DHOLUO Dictionary</a> were written by people just like
			you. Now's your chance to add your own!
		</p>
		<p>
			Please review <a href="/guidelines">DHOLUO Dictionary content guidelines</a> before writing your
			definition. Here's the short version: Share definitions that other people will find meaningful
			and never post hate speech or people’s personal information.
		</p>

		<form method="POST" class="mt-5">
			<div class="mb-6">
				<label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
					>Definition type</label
				>
				<select
					on:change={handleChange}
					value={state.type}
					id="type"
					name="type"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				>
					<option selected value="word">Word</option>
					<option value="phrase">Phrase i.e Proverb</option>
				</select>
			</div>
			<div class="mb-6">
				{#if state.type === 'word'}
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
						>Word to define</label
					>
				{/if}
				{#if state.type === 'phrase'}
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
						>Phrase to define</label
					>
				{/if}
				<input
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Type the word to define"
					required
					id="word"
					name="word"
				/>
			</div>
			<div class="mb-6">
				<label
					for="countries"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
					>Select Dialect</label
				>
				<select
					id="dialect"
					name="dialect"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				>
					<option selected value="all">All</option>
					<option value="joluo">Joluo (Kenya & Tanzania)</option>
				</select>
			</div>
			<div class="mb-6">
				<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
					>Definition (English)</label
				>
				<textarea
					id="definition"
					name="definition"
					rows="4"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Type the  definition here"
				/>
			</div>
			<div class="mb-6">
				<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
					>Example usage</label
				>
				<textarea
					id="example"
					name="example"
					rows="4"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Example usage in a sentence(s)"
				/>
			</div>
			<div class="mb-6">
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
					>English Translation</label
				>
				<input
					id="english"
					name="english"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Translate word to English"
				/>
			</div>

			<div class="mb-6">
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
					>Swahili Translation</label
				>
				<input
					id="swahili"
					name="swahili"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Translate word to Swahili"
				/>
			</div>

			<button
				type="submit"
				class="text-white bg-blue-700 hover:bg-blue-800 mt-5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Submit</button
			>
		</form>
	</div>
{/if}
