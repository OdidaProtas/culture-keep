<script>
	// @ts-nocheck

	export let data = { post: { title: '' } };
	import { page } from '$app/stores';
	import { isAdmin } from '../../../db/authbodge';
	const user = $page.data.session?.user;
	const isAdm = isAdmin(user?.email);
</script>

{#if !data.post}
	<div class="flex align-middle justify-center h-full text-lg text-center mt-20">
		<div>
			<p>Post not found. There could be a url mismatch, or it may have been deleted.</p>
			<a class="mt-4" href="/blog/new">Add a new post</a>
		</div>
	</div>
{/if}

{#if data.post}
	<div>
		<h1>{data.post.title}</h1>
		<hr />
		<div class="my-6 lg:mx-48">
			{#if !data.post.published}
				<div class="bg-yellow-200 p-2 outline-yellow-400 rounded-lg">
					<p class="text-lg">Warning</p>
					This blog post has not been published. Any information shared will in this post will only be
					visible to the author
				</div>
			{/if}
		</div>

		<div class="lg:flex gap-4">
			<div class="my-9 flex-1  bg-white p-3 rounded-3xl">
				{@html data.post.content}
				{#if isAdm}
					<div class="flex justify-between">
						<form method="POST">
							<input value={data.post.id} type="hidden" id="id" name="id" />
							<input value={false} type="hidden" id="isDelete" name="isDelete" />
							{#if data.post.published}
								<button class="bg-red-600 text-white rounded px-4 py-2 " type="submit"
									>Unpublish</button
								>
							{/if}
							{#if !data.post.published}
								<button class="bg-green-600 px-4 py-2  rounded-lg text-white" type="submit"
									>Publish</button
								>
							{/if}
						</form>
						<a href={`/blog/${data.post.id}/edit`}>Edit post</a>
						<form method="POST">
							<input value={data.post.id} type="hidden" id="id" name="id" />
							<input value={true} type="hidden" id="isDelete" name="isDelete" />

							<button class="bg-red-600 text-white rounded px-4 py-2 " type="submit"
								>DELETE POST</button
							>
						</form>
					</div>
				{/if}
			</div>
			<div class="w-96 ">
				<h3>More Stories</h3>

				<div>
					{#each data.more as word}
						<a  href={`/blog/${word.id}`}>
							{word.title}
						</a>
						<hr />
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}

<div  >
	<h1>More read</h1>

	<div class="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
		{#each data.more as word}
			<a href={`/blog/${word.id}`}>
				{word.title}
			</a>
		{/each}
	</div>
</div>
