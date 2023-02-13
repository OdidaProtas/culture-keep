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
	const q = $page.url.searchParams.get('word');

	let word = q;

	let variations = [];
	let variation = { dialect: '', word: '' };

	function handleVariationChange(name, val, i) {
		let all = [...variations];
		all[i] = { ...all[i], [name]: val };
		variations = [...all];
	}

	function handleAddVariation() {
		variations = [...variations, variation];
	}

	function handleRemoveVariation(index) {
		let all = [...variations];
		all.splice(index, 1);
		variations = [...all];
	}
</script>

<svelte:head>
	<title>Define words</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-center lg:px-36">
	<h1>Add definition {q ? `for "${q}"` : ''}</h1>
	<p class="mb-6">
		All words in this dictionary were written by people just like you. Now's your chance to add your
		own!
	</p>
	<p>
		Please review <a class="hover:no-underline" href="/guidelines"
			>Dholuo Dictionary content guidelines</a
		> before writing your definition. Here's the short version: Share definitions that other people will
		find meaningful and never post hate speech or people’s personal information.
	</p>
</div>

{#if !user}
	<div class="text-center text-lg mt-9">Login required.</div>
	<div class="text-center">
		<p class="mt-8" />
		<button class="mt-9 text-white  text-lg rounded-3xl p-3 ox-4 bg-blue-700"
			>Sign in with your Google account</button
		>
		<div class="mt-8">
			<small
				>This app only requests for your basic profile, i.e email address. We do not share any of
				your data to 3rd parties.</small
			>
		</div>
	</div>{/if}

{#if user}
	<div class="">
		{#if form?.success}
			<div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
				<p class="font-bold">Success</p>
				<p>Definition entry has been added</p>
			</div>
		{/if}

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
					bind:value={word}
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
				<label for="plural" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
					>Plural (Optional)</label
				>
				<input
					id="plural"
					name="plural"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Plural"
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

			<p class="text-lg">Add Dialect variations</p>

			{#each variations as variation, index}
				<div class="flex gap-3 mt-4">
					<div class="w-full">
						<label
							for="dia2"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Dialect</label
						>
						<select
							id="dia2"
							onchange={(e) => handleVariationChange('dialect', e.target.value, index)}
							bind:value={variation.dialect}
							name="dia2"
							required
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						>
							<option selected value="">Select</option>
							<option value="all">All</option>
							<option value="joluo">Joluo (Kenya & Tanzania)</option>
						</select>
					</div>
					<div class="w-full">
						<label
							for="wordw"
							class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Word</label
						>
						<input
							onchange={(e) => handleVariationChange('word', e.target.value, index)}
							bind:value={variation.word}
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Type the word to define"
							required
							id="wordw"
							name="wordw"
						/>
					</div>
					<div class="mt-3">
						<button
							on:click={() => handleRemoveVariation(index)}
							type="button"
							class="bg-red-500 text-white rounded-lg p-2"
						>
							Remove</button
						>
					</div>
				</div>
			{/each}
			<div class="mt-3 mb-9">
				<button
					type="button"
					on:click={handleAddVariation}
					class="text-blue-500 outline-dashed rounded-lg p-2">Add variation</button
				>
			</div>
			<input type="hidden" value={JSON.stringify(variations)} name="variations" id="variations" />
			<button
				type="submit"
				class="text-white  bg-blue-700 hover:bg-blue-800 mt-5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Submit</button
			>
		</form>
	</div>
{/if}
