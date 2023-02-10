<script>
	// @ts-nocheck

	/** @type {import('./$types').ActionData} */
	export let form;

	let state = {
		type: 'word'
	};

	export let data = {
		post: { title: '' }
	};

	// import { quill } from 'svelte-quill';

	// const options = {
	// 	modules: {
	// 		toolbar: [
	// 			[{ header: [1, 2, 3, 4, 5, 6] }],
	// 			['bold', 'italic', 'underline', 'strike'],
	// 			['link', 'image', 'link']
	// 		]
	// 	},
	// 	placeholder: 'Write your story...',
	// 	theme: 'bubble'
	// };
	// let content = data.post.content;
</script>

<svelte:head>
	<title>Edit post</title>
	<meta name="description" content="About this app" />
	<link href="//cdn.quilljs.com/1.3.6/quill.bubble.css" rel="stylesheet" />
</svelte:head>

<div class="">
	{#if form?.success}
		<div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
			<p class="font-bold">Success</p>
			<p>Definition entry has been added</p>
		</div>
	{/if}
	<h1 class="mt-9 mb-3">Edit Post</h1>
	<p>
		Please review <a href="/guidelines">Our community guidelines</a> before writing your blog post. Here's
		the short version: Share definitions that other people will find meaningful and never post hate speech
		or people’s personal information.
	</p>

	<form method="POST" class="mt-5">
		<div class="mb-6">
			{#if state.type === 'word'}
				<label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
					>Post title</label
				>
			{/if}

			<input
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Choose a title for your post"
				required
				id="title"
				name="title"
				bind:value={data.post.title}
			/>
		</div>
		<div class="mb-6">
			<label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
				>Blog content
			</label>
			<textarea
				id="content"
				class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				name="content"
				rows="18"
				placeholder="Write your post here. Markdown is supported"
			/>
			<!-- <div
				class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				use:quill={options}
				on:text-change={(e) => {
					content = e.detail.html;
				}}
			/> -->
		</div>

		<button
			type="submit"
			class="text-white   bg-blue-700 hover:bg-blue-800 mt-5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>Save draft</button
		>
	</form>
</div>
