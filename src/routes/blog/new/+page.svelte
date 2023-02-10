<script>
	// @ts-nocheck

	/** @type {import('./$types').ActionData} */
	export let form;

	let state = {
		type: 'word'
	};

	import { page } from '$app/stores';
	import { isAdmin } from '../../../db/authbodge';

	const user = $page.data.session?.user;

	import { onMount } from 'svelte';

	let editor;

	export let toolbarOptions = [
		[
			{ header: 1 },
			{ header: 2 },
			{ header: 3 },
			{ header: 4 },
			{ header: 5 },
			{ header: 6 },
			'blockquote',
			'link',
			'image',
			'video'
		],
		['bold', 'italic', 'underline', 'strike'],
		[{ list: 'ordered' }, { list: 'ordered' }],
		[{ align: [] }],
		['clean']
	];

	let content;

	onMount(async () => {
		const { default: Quill } = await import('quill');

		let quill = new Quill(editor, {
			modules: {
				toolbar: toolbarOptions
			},
			theme: 'bubble',
			placeholder: 'Write your story...'
		});

		quill.on('text-change', function (delta, oldDelta, source) {
			content = quill.root.innerHTML;
		});
	});
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="About this app" />
	<link href="//cdn.quilljs.com/1.3.6/quill.bubble.css" rel="stylesheet" />
</svelte:head>

{#if !user}
	<div class="mt-9 text-center text-lg bg-red-200 p-2 rounded-lg outline outline-red-400">
		<p class="my-2">You must be signed in to view this page</p>
		<a href="/auth/signin">Sign in </a>
	</div>
{/if}

{#if user && !isAdmin(user?.email)}
	<div class="mt-9 text-center text-lg bg-red-200 p-2 rounded-lg outline outline-red-400">
		<p class="my-2">Unauthorized! Only admins can view this page.</p>
		<a href="/auth/signin">Sign in with admin account</a>
	</div>
{/if}

{#if user && isAdmin(user?.email)}
	<div class="">
		{#if form?.success}
			<div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
				<p class="font-bold">Success</p>
				<p>Definition entry has been added</p>
			</div>
		{/if}
		<h1 class="mt-9 mb-3">New Post</h1>
		<p>
			Please review <a href="/guidelines">Our community guidelines</a> before writing your blog post.
			Here's the short version: Share definitions that other people will find meaningful and never post
			hate speech or people’s personal information.
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
				/>
			</div>

			<div class="mb-6">
				<label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
					>Blog content
				</label>
				<input
					bind:value={content}
					id="content"
					type="hidden"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					name="content"
					rows="18"
					placeholder="Write your post here. Markdown is supported"
				/>
				<div class="editor-wrapper">
					<div
						class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						bind:this={editor}
						on:text={(e) => {
							console.log(e);
						}}
					/>
				</div>
			</div>

			<button
				type="submit"
				class="text-white   bg-blue-700 hover:bg-blue-800 mt-5 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Save draft</button
			>
		</form>
	</div>
{/if}
