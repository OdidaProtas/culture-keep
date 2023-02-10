<script>
	// @ts-nocheck

	export let data = { post: { title: '' } };
</script>

{#if !data.post}
	<div
		class="flex align-middle justify-center h-full text-lg text-center mt-20"
	>
		<div>
			<p>Post not found. There could be a url mismatch, or it may have been deleted.</p>
			<a  class="mt-4"  href="/blog/new">Add a new post</a>
		</div>
	</div>
{/if}

{#if data.post}
	<div>
		<h1>{data.post.title}</h1>
		<hr />
		<div class="my-6">
			{#if !data.post.published}
				<div class="bg-yellow-200 p-2 outline-yellow-400 rounded-lg">
					<p class="text-lg">Warning</p>
					This blog post has not been published. Any information shared will in this post will only be
					visible to the author
				</div>
			{/if}
		</div>

		<div class="my-9">
			{data.post.content}
		</div>

		<div class="flex justify-between">
			<form method="POST">
				<input value={data.post.id} type="hidden" id="id" name="id" />
				{#if data.post.published}
					<button class="bg-red-600 text-white rounded px-4 py-2 " type="submit">Unpublish</button>
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

				<button class="bg-red-600 text-white rounded px-4 py-2 " type="submit">DELETE POST</button>
			</form>
		</div>
	</div>
{/if}
