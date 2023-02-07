<script>
	// @ts-nocheck
	let variation = 'blue';
	let variations = {
		blue: 'https://images.teemill.com/la8r55g9t4xaqj4e5klhejjqpglbl08erqtjsdwhcgnt6sov.png.png?w=1080&h=auto'
	};
</script>

<div class="flex justify-start">
	<div class="bg-white flex-1 p-2">
		<div class="group relative">
			<div class="min-h-80 w-full  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
				<img
					src={variations[variation]}
					alt="Front of men&#039;s Basic Tee in black."
					class="h-full w-full object-cover object-center lg:h-full lg:w-full"
				/>
			</div>
			<div class="mt-4 flex justify-between">
				<div>
					<h3 class="text-sm text-gray-700">
						<a href="/">
							<span aria-hidden="true" class="absolute inset-0" />
							Basic Tee
						</a>
					</h3>
					<p class="mt-1 text-sm text-gray-500">Black</p>
				</div>
				<p class="text-sm font-medium text-gray-900">$35</p>
			</div>
		</div>
	</div>
	<div class="bg-white flex-1 ml-2 p-2">
		<h3>Customize your order</h3>
		<div class="my-6">
			<label for="word" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
				>Word (Front)</label
			>
			<input
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				required
				id="word"
				name="word"
			/>
		</div>
		<div class="my-6">
			<label
				for="definition"
				class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Definition (Back)</label
			>
			<textarea
				id="definition"
				name="definition"
				rows="4"
				class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Type the  definition here"
			/>
		</div>
	</div>
</div>

<!-- <div>
	{#each variant in Object.keys(variations)}
	<button>{variant}</button>
{/each}
</div> -->
<div class="mt-6 flex justify-between">
	<button
		class="btn text-white w-full  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>Buy now</button
	>
	<button
		class="btn ml-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>Add to basket</button
	>
</div>
