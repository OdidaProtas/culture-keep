<script>
	// @ts-nocheck

	// export let stock;
	// export let variation;
	export let frontWord;
	export let textColor = 'white';
	export let thumbnail = false;
	export let carouselOff = false;

	export let color = 'blue';

	import { page } from '$app/stores';
	import axios from 'axios';
	import { onMount } from 'svelte';
	let q = $page.url.searchParams.get('q');

	const user = $page.data.session?.user?.name;

	let words = [];

	let colors = ['blue', 'white', 'black', 'yellow', 'pink', 'gray', 'red', 'green'];
	onMount(() => {
		if (!carouselOff) {
			axios.get('/word').then(({ data }) => {
				words = [
					...data?.split(','),
					q ? q : 'Oyieyo chami to kudhi',
					'Custom text',
					'Jaluo oksechi',
					'Visit Kondele',
					user ? user : 'Your name',
					'Mi amor',
					'Dreamville',
					'Sveltekit',
					'Dreamer',
					'Visionary',
					'Still Dre',
					'Svelte > React',
					'Thriving Luos',
					'Kwach',
					'Wuod Chris',
					'Nyar Seme',
					'JS Guru'
				];
			});
			setInterval(() => {
				frontWord = words[Math.round(Math.random() * words.length)];
			}, 3000);
			setInterval(() => {
				color = colors[Math.floor(Math.random() * colors.length)];
				if (color === 'white') {
					textColor = 'gray';
				} else textColor = 'white';
			}, 4200);
		}
	});

	import hoodieBlue from '../../../../lib/assets/hoodie-blue.png';
	import hoodieWhite from '../../../../lib/assets/hoodie-white.png';
	import hoodieBlack from '../../../../lib/assets/hoodie-black.png';
	import hoodieYellow from '../../../../lib/assets/hoodie-yellow.png';
	import hoodiePink from '../../../../lib/assets/hoodie-pink.png';
	import hoodieGray from '../../../../lib/assets/hoodie-gray.png';
	import hoodieRed from '../../../../lib/assets/hoodie-red.png';
	import hoodieGreen from '../../../../lib/assets/hoodie-green.png';
</script>

<div>
	<div style="position: relative; width: fit-content">
		{#if color === 'blue'}
			<img class="rounded-lg" width={500} src={hoodieBlue} alt="" />
		{/if}
		{#if color === 'white'}
			<img class="rounded-lg" width={500} src={hoodieWhite} alt="" />
		{/if}
		{#if color === 'black'}
			<img class="rounded-lg" width={500} src={hoodieBlack} alt="" />
		{/if}
		{#if color === 'yellow'}
			<img class="rounded-lg" width={500} src={hoodieYellow} alt="" />
		{/if}
		{#if color === 'pink'}
			<img class="rounded-lg" width={500} src={hoodiePink} alt="" />
		{/if}
		{#if color === 'gray'}
			<img class="rounded-lg" width={500} src={hoodieGray} alt="" />
		{/if}
		{#if color === 'red'}
			<img class="rounded-lg" width={500} src={hoodieRed} alt="" />
		{/if}
		{#if color === 'green'}
			<img class="rounded-lg" width={500} src={hoodieGreen} alt="" />
		{/if}
		<div
			style="
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			min-height: 50%;
			right: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 12px;
		  "
		>
			{#if !thumbnail}
				<div class="pt-12 lg:pt-2 md:pt-2" style="max-width: 30%">
					<p
						style="
				margin-top: -60px;
				font-size: x-large;
				text-align: center;
			  "
			  class={`text-xs text-${textColor}-500 lg:text-lg md:text-lg`}
			  >
						{frontWord ?? 'Oyieyo chami to kudhi'}
					</p>
				</div>
			{/if}
		</div>
	</div>
</div>

<!-- <div style="position:relative">
	<img src={hoodie} alt="." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
	<div class="absolute inset-0 flex items-center justify-center">
		<p class="text-center text-xl max-w-xs	 text-white">{frontWord}</p>
	</div>
</div> -->
