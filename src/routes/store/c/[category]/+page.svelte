<script>
	// @ts-nocheck
	import Counter from '../../../Counter.svelte';
	import { basket } from '../../basket';

	import { goto } from '$app/navigation';

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
	import { diId } from '../../../id';
	import { onMount } from 'svelte';
	import Hoodie from './Hoodie.svelte';
	import Tshirt from './Tshirt.svelte';
	import Mug from './Mug.svelte';
	const isMug = $page.url.pathname.includes('/mugs');
	const isTshirts = $page.url.pathname.includes('/tshirts');
	const isHoodies = $page.url.pathname.includes('/hoodies');

	const q = $page.url.searchParams.get('q');

	let qs = q?.split('') ?? [];

	let uppercased = qs.reduce((prev, c, i) => {
		if (i === 0) return c.toUpperCase();
		return prev + c.toLowerCase();
	}, '');

	const category = $page.params.category;

	let count = 1;

	let color = 'blue';

	let textColor = 'white';

	let size = 'md';

	function handleAddCount() {
		count = count + 1;
	}

	function handleReduceCount() {
		if (count > 1) {
			count = count - 1;
		}
	}

	onMount(() => {
		diId.set(localStorage.getItem('ld-id'));
	});

	function handleAddToCart() {
		let all = [...$basket];
		let item = all.find((item) => item.word === q);
		if (!item) basket.set([...$basket, { word: q, count, price: 100 }]);
		else {
			let indexOfItem = all.indexOf(item);
			all[indexOfItem] = { ...item, count: item.count + count };
			basket.set([...all]);
		}
	}

	let defaultPrices = {
		tshirts: 1299,
		hoodies: 1899,
		mugs: 799
	};

	export let data = { definition: { word: uppercased, definition: '' } };
	let frontWord = uppercased ? uppercased : data.definition?.word ?? 'Custom Text';
	let definition = data.definition?.definition;

	import { spring } from 'svelte/motion';

	let displayPrice = isMug
		? defaultPrices.mugs
		: isHoodies
		? defaultPrices.hoodies
		: defaultPrices.tshirts;

	const display_price = spring();
	$: display_price.set(displayPrice * count);
	$: offset = modulo($display_price, 1);

	/**
	 * @param {number} n
	 * @param {number} m
	 */
	function modulo(n, m) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}
</script>

<div class="text-center mb-4">
	<strong class="title">Our products</strong>
</div>

<div class="  justify-start lg:inline md:flex-col">
	<div class=" flex-1 bg-white p-2 rounded-lg">
		<div class="group relative">
			<div
				class="min-h-80 w-full  rounded-md flex justify-center group-hover:opacity-75 lg:aspect-none "
			>
				{#if isTshirts}
					<Tshirt {frontWord} {stock} {variation} />
				{/if}
				{#if isMug}
					<Mug {frontWord} {stock} {variation} />
				{/if}
				{#if isHoodies}
					<Hoodie {textColor} {frontWord} {stock} {variation} />
				{/if}
			</div>
			<div class="mt-4 flex justify-between">
				<div>
					<h3 class="text-sm text-gray-700">
						<span aria-hidden="true" class="absolute inset-0" />
					</h3>
				</div>
			</div>
		</div>
	</div>
	<div>
		<div class="p-2 rounded-lg mt-6 bg-yellow-200 text-sm">
			Final product may appear different from the preview above. Our Quality assurance team may
			tweak text sizes and placement.
		</div>
	</div>
	<div class=" flex-1   ">
		<div class="my-6">
			<label for="word" class="block mb-2 text-lg font-medium ">Word (Front)</label>
			<input
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				required
				id="word"
				name="word"
				bind:value={frontWord}
			/>
		</div>
		{#if isMug}
			<div class="my-6">
				<label
					for="definition"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
					>Definition (Back) - Optional</label
				>
				<textarea
					id="definition"
					name="definition"
					bind:value={definition}
					rows="4"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Type the  definition here"
				/>
			</div>
		{/if}
	</div>
</div>

{#if !isMug}
	<div class="mb-6">
		<label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
			>Size</label
		>
		<select
			on:change={(e) => (size = e.target.value)}
			bind:value={size}
			id="size"
			name="size"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		>
			<option selected value="xs">Extra Small</option>
			<option value="sm">Small</option>
			<option value="md">Medium</option>
			<option value="lg">Large</option>
			<option value="xl">Extra Large</option>
			<option value="xxxl">XXXL</option>
		</select>
	</div>
{/if}

<div class="p-2 text-lg">Item color</div>
<div class="flex justify-start flex-wrap">
	<button
		on:click={() => (color = 'blue')}
		class={`btn m-2 text-white bg-${variation}-700 hover:bg-${variation}-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-${variation}-800`}
		>Blue</button
	>
	<button
		on:click={() => (color = 'white')}
		class={`btn m-2 text-black bg-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-white dark:hover:bg-gray-300 dark:focus:ring-gray-300`}
		>White</button
	>
	<button
		on:click={() => (color = 'black')}
		class={`btn m-2 text-white bg-black hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-black-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800`}
		>Black</button
	>
	<button
		on:click={() => (color = 'yellow')}
		class={`btn m-2 text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800`}
		>Yellow</button
	>
	<button
		on:click={() => (color = 'pink')}
		class={`btn m-2 text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800`}
		>Pink</button
	>
	<button
		on:click={() => (color = 'gray')}
		class={`btn m-2 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800`}
		>Gray</button
	>
	<button
		on:click={() => (color = 'red')}
		class={`btn m-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800`}
		>Red</button
	>
	<button
		on:click={() => (color = 'green')}
		class={`btn m-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-red-700 dark:focus:ring-green-800`}
		>Green</button
	>
</div>
<div class="p-2 mt-5 text-lg">Text color</div>
<div class="flex justify-start">
	<button
		on:click={() => (textColor = 'white')}
		class={`btn ml-2 text-black bg-white-700 hover:bg-white-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-white dark:hover:bg-gray-300 dark:focus:ring-gray-300`}
		>White</button
	>
	<button
		on:click={() => (textColor = 'black')}
		class={`btn ml-2 text-white bg-black hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-black-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800`}
		>Black</button
	>
	<button
		on:click={() => (textColor = 'blue')}
		class={`btn ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
		>Blue</button
	>
	<button
		on:click={() => (textColor = 'red')}
		class={`btn ml-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800`}
		>Red</button
	>
	<button
		on:click={() => (textColor = 'gray')}
		class={`btn ml-2 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800`}
		>Gray</button
	>
</div>

<div class="mt-20">
	<Counter {count} {handleReduceCount} {handleAddCount} />
</div>

<div class="mt-20 mb-9 flex justify-between">
	<div class="flex text-lg mr-3 align-bottom">KES</div>
	<div class="counter-viewport w-96">
		<div class="counter-digits" style="transform: translate(0, {100 * offset}%)">
			<strong class="hidden" aria-hidden="true">{Math.floor($display_price + 1)}</strong>
			<strong> {Math.floor($display_price)}</strong>
		</div>
	</div>
	<form class="w-full" method="POST">
		<input value={frontWord} id="q" name="q" type="hidden" />
		<input value={$diId} id="device" name="device" type="hidden" />
		<input value={category} id="type" name="type" type="hidden" />
		<input value={color} id="color" name="color" type="hidden" />
		<input value={textColor} id="textColor" name="textColor" type="hidden" />
		<input value={size} id="size" name="size" type="hidden" />
		<input
			id="price"
			value={isMug
				? defaultPrices.mugs * count
				: isHoodies
				? defaultPrices.hoodies * count
				: defaultPrices.tshirts * count}
			name="price"
			type="hidden"
		/>
		<input id="quantity" value={count} name="quantity" type="hidden" />

		<button
			on:click={handleAddToCart}
			class="btn ml-2 mt-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>Add to basket</button
		>
	</form>
</div>

<style>
	.counter-viewport {
		height: 4em;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		font-weight: 400;
		color: var(--color-theme-1);
		font-size: 4rem;
		align-items: center;
	}

	.title {
		color: var(--color-theme-1);
		font-size: 2rem;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.hidden {
		top: -100%;
		user-select: none;
	}
</style>
