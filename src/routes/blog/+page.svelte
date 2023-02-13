<script>
	// @ts-nocheck

	export let data = { posts: [] };

	const hasPosts = Boolean(data.posts.length);
</script>

<div>
	<div class="text-center">
		<h1>Our stories</h1>
	</div>
	<hr />
	{#if !hasPosts}
		<div
			style="min-height: 69vh;"
			class="h-full mt-20 text-center flex justify-center align-middle "
		>
			<div>
				<p>Sorry, but no stories have been added. Please check again later</p>
			</div>
		</div>
	{/if}

	<div class="grid sm:grid-cols-1 mt-9 lg:grid-cols-2 md:grid-cols-2 gap-4 lg:mx-20">
		{#each data.posts as post}
			<a class="text-black  " style="text-decoration:none" href={`/blog/${post.id}`}>
				<div class="bg-blue-200 p-3 rounded-lg cursor-pointer">
					<h6 class="text-lg">{post.title}</h6>
				</div></a
			>
		{/each}
	</div>

	<div />
</div>
