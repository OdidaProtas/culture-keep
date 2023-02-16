<script>
	// @ts-nocheck

	/** @type {import('./$types').ActionData} */
	export let form;

	import { page } from '$app/stores';

	let user = $page.data.session?.user;
	const q = $page.url.searchParams.get('word');
	const editStr = $page.url.searchParams.get('edit');
	const isEdit = Boolean(editStr);

	import { uploadCloudinary } from '$lib/files/upload';
	import Dropzone from 'svelte-file-dropzone';

	export let data = {};

	let coverImage = data.word?.imageUrl;
	let uploading = false;

	function handleFilesSelect(e) {
		uploading = true;
		const { acceptedFiles, fileRejections } = e.detail;

		uploadCloudinary([{ fileData: acceptedFiles[0], field: 'coverImage' }]).then((data) => {
			coverImage = data[0].url;
			uploading = false;
		});
	}

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

	let state = {
		type: data?.word?.type ?? 'word',
		word: data?.word?.word ?? q,
		plural: data?.word?.plural,
		english: data?.word?.english,
		swahili: data?.word?.swahili,
		dialect: data?.word?.dialect,
		plural: data?.word?.plural,
		example: data?.word?.example,
		definition: data?.word?.definition
	};
</script>

<svelte:head>
	<title>Define words</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-center lg:px-36">
	{#if !isEdit}
		<h1>Add definition {q ? `for "${q}"` : ''}</h1>
	{:else}
		<h1>Update {q ? `"${q}" definition` : ''}</h1>
	{/if}
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

{#if form?.success}
	<div class="bg-green-200 p-2 rounded-xl lg:mx-96 mt-4">
		Congratulations. Definition has been added.
	</div>
{/if}

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
	<div class="lg:px-48">
		<form method="POST" class="mt-5">
			<div class="mb-6">
				<label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
					>Definition type</label
				>
				<select
					bind:value={state.type}
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
					bind:value={state.word}
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
					bind:value={state.dialect}
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				>
					<option selected value="all">All</option>
					<option value="joluo">Joluo (Kenya & Tanzania)</option>
				</select>
			</div>
			<div class="mb-6">
				<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
					>Definition (optional)</label
				>
				<textarea
					id="definition"
					name="definition"
					rows="4"
					bind:value={state.definition}
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
					bind:value={state.example}
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
					bind:value={state.plural}
				/>
			</div>
			<div class="mb-6">
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
					>English Translation</label
				>
				<input
					id="english"
					bind:value={state.english}
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
					bind:value={state.swahili}
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
			<div class="my-9">
				<label for="dropzone">Image</label>
				<input
					bind:value={coverImage}
					id="imageUrl"
					type="hidden"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					name="imageUrl"
					rows="18"
					placeholder="Write your post here. Markdown is supported"
				/>
				<Dropzone accept="image/*" multiple={false} on:drop={handleFilesSelect} />
				{#if coverImage}
					<img class="mt-4" width={81} src={coverImage} alt="Cover" />
				{/if}
				{#if uploading}
					<div class="mt-4" role="status">
						<svg
							aria-hidden="true"
							class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/>
						</svg>
						<span class="sr-only">Uploading...</span>
					</div>
				{/if}
			</div>

			<button
				type="submit"
				class="text-white  bg-blue-700 hover:bg-blue-800 mt-5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>{#if isEdit}
					Update
				{:else}
					Save
				{/if}</button
			>
		</form>
	</div>
{/if}
