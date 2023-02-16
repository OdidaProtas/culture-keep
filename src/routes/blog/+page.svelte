<script>
	// @ts-nocheck

	export let data = { posts: [], more: [], rest: [] };

	const hasPosts = Boolean(data.posts.length);

	export let form = {};
</script>

<div>
	<div class="text-center">
		<h1>Dholuo tales</h1>
	</div>
	<div class="lg:px-96">
		<form method="POST">
			<label for="email" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
				>Search</label
			>
			<div class="relative">
				<input
					id="email"
					type="email"
					name="email"
					class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-3xl mt-6 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Enter email address"
					required
				/>
				<button
					type="submit"
					class="text-white rounded-3xl absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>Subscribe</button
				>
			</div>
		</form>
	</div>

	{#if form?.success}
		<div class="p-3 my-4 bg-green-200 rounded-xl lg:mx-96">
			<p>Subscription successful. You will receive updates via email.</p>
		</div>
	{/if}
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

	<div class="grid sm:grid-cols-1 mt-9 lg:grid-cols-4 md:grid-cols-2 gap-4 lg:mx-20">
		{#each data.posts as post}
			<a class="text-black rounded-2xl  bg-blue-300 " style="text-decoration:none" href={`/blog/${post.id}`}>
				<div
					style="min-height:100px; max-height:100px; overflow:hidden"
					class="bg-blue-200 p-3  rounded-t-2xl cursor-pointer"
				>
					<h6 class="text-lg">{post.title}</h6>
				</div>
				<div class="flex justify-between p-2 ">
					<p>1 min read</p>
					<p><a href={`/blog/${post.id}`}>View post</a></p>
				</div></a
			>
		{/each}
	</div>
	{#if data.more.length}
		<div class="flex">
			<div class="lg:mx-20 mt-9 flex-1">
				<p class="text-2xl mb-3">More stories</p>
				{#each data.more as post}
					<div class="bg-blue-200 mb-4 p-3 rounded-lg cursor-pointer">
						<a class="text-black" style="text-decoration:none" href={`/blog/${post.id}`}>
							<div class="flex">
								<div class="flex-1">
									<h6 class="text-lg">{post.title}</h6>
									<p>1 min read</p>
								</div>
								{#if post.coverImage}
									<img src={post.coverImage} style="height:144px" alt="kjnbhv" />
								{/if}
							</div>
						</a>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>
