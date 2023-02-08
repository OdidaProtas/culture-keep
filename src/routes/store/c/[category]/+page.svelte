<script>
	// @ts-nocheck
	import Counter from '../../../Counter.svelte';

	let variation = 'blue';
	let stock = {
		tshirts: {
			blue: 'https://images.teemill.com/la8r55g9t4xaqj4e5klhejjqpglbl08erqtjsdwhcgnt6sov.png.png?w=1080&h=auto',
			red: 'https://images.teemill.com/la8r55g9t4xaqj4e5klhejjqpglbl08erqtjsdwhcgnt6sov.png.png?w=1080&h=auto',
			green:
				'https://images.teemill.com/la8r55g9t4xaqj4e5klhejjqpglbl08erqtjsdwhcgnt6sov.png.png?w=1080&h=auto'
		},
		mugs: {
			white: 'https://m.media-amazon.com/images/I/61DTd54+QUL._AC_SX425_.jpg',
			blue: 'https://m.media-amazon.com/images/I/61DTd54+QUL._AC_SX425_.jpg'
		},
		hoodies: {
			blue: 'https://havencraft.co.ke/wp-content/uploads/2021/03/Royal-Blue-Front-3.png'
		}
	};
	import { page } from '$app/stores';
	const isMug = $page.url.pathname.includes('/mugs');
	const isTshirts = $page.url.pathname.includes('/tshirts');
	const isHoodies = $page.url.pathname.includes('/hoodies');
</script>

<div class="flex justify-start lg:inline">
	<div class="bg-white flex-1 p-2">
		<div class="group relative">
			<div class="min-h-80 w-full  rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
				{#if isTshirts}
					<img
						src={stock.tshirts[variation]}
						alt="Front of men&#039;s Basic Tee in black."
						class="h-full w-full object-cover object-center lg:h-full lg:w-full"
					/>
				{/if}
				{#if isMug}
					<img
						src={stock.mugs[variation]}
						alt="Front of men&#039;s Basic Tee in black."
						class="h-full w-full object-cover object-center lg:h-full lg:w-full"
					/>
				{/if}
				{#if isHoodies}
					<img
						src={stock.hoodies[variation]}
						alt="Front of men&#039;s Basic Tee in black."
						class="h-full w-full object-cover object-center lg:h-full lg:w-full"
					/>
				{/if}
			</div>
			<div class="mt-4 flex justify-between">
				<div>
					<h3 class="text-sm text-gray-700">
						<span aria-hidden="true" class="absolute inset-0" />
						Basic Tee
					</h3>
					<p class="mt-1 text-sm text-gray-500">Black</p>
				</div>
				<p class="text-sm font-medium text-gray-900">$35</p>
			</div>
		</div>
	</div>
	<div class="bg-white flex-1 ml-2 p-2 mt-9">
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
				class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
				>Definition (Back)</label
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
<!-- <div class="flex justify-between">
	{#each Object.keys(variations) as variation}
		<button
			key={variation}
			class={`btn ml-2 text-white bg-${variation}-700 hover:bg-${variation}-800 focus:ring-4 focus:outline-none focus:ring-${variation}-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-${variation}-600 dark:hover:bg-${variation}-700 dark:focus:ring-${variation}-800`}
			>{variation}</button
		>
	{/each}
</div> -->

<Counter />
<div class="mt-6 flex justify-between">
	<form action="/store/checkout">
		<button
			class="btn text-white w-full  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>Buy now</button
		>
	</form>

	<button
		class="btn ml-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>Add to basket</button
	>
</div>
