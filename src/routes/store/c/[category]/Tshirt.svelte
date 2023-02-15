<script>
	// @ts-nocheck

	// export let stock;
	// export let variation;
	export let frontWord;
	export let thumbnail = false;
	export let textColor = 'gray';

	export let color = 'pink';

	import { page } from '$app/stores';
	import axios from 'axios';
	import { onMount } from 'svelte';
	let q = $page.url.searchParams.get('q');
	const user = $page.data.session?.user?.name;
	export let carouselOff = false;

	import tshirtPink from '../../../../lib/assets/tshirt-pink.png';
	import tshirtYellow from '../../../../lib/assets/tshirt-yellow.png';
	import tshirtRed from '../../../../lib/assets/tshirt-red.png';
	import tshirtBlue from '../../../../lib/assets/tshirt-blue.png';
	import tshirtBlack from '../../../../lib/assets/tshirt-black.png';
	import tshirtGray from '../../../../lib/assets/tshirt-gray.png';
	import tshirtGreen from '../../../../lib/assets/tshirt-green.png';
	import tshirtWhite from '../../../../lib/assets/tshirt-white.png';

	let words = [];

	let colors = ['blue', 'white', 'black', 'yellow', 'pink', 'gray', 'red', 'green'];

	onMount(() => {
		if (!carouselOff) {
			axios.get('/word').then(({ data }) => {
				words = [
					...data?.split(','),
					q ? q : 'Mit mar Nyasaye oloyo mar niang',
					'Custom text',
					'Jaluo oksechi',
					'Visit kondele',
					user ? user : 'Your name',
					'Mi amor',
					'Dreamville',
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
			}, 3200);
			setInterval(() => {
				color = colors[Math.floor(Math.random() * colors.length)];
				if (color === 'white') {
					textColor = 'gray';
				} else textColor = 'white';
			}, 3900);
		}
	});
</script>

<div class="flex justify-center">
	<div style="position: relative; width: fit-content; margin-top: 40px">
		{#if color === 'pink'}
			<img class="rounded-lg" width={500} src={tshirtPink} alt="" />
		{/if}

		{#if color === 'yellow'}
			<img class="rounded-lg" width={500} src={tshirtYellow} alt="" />
		{/if}
		{#if color === 'red'}
			<img class="rounded-lg" width={500} src={tshirtRed} alt="" />
		{/if}
		{#if color === 'blue'}
			<img class="rounded-lg" width={500} src={tshirtBlue} alt="" />
		{/if}
		{#if color === 'black'}
			<img class="rounded-lg" width={500} src={tshirtBlack} alt="" />
		{/if}
		{#if color === 'gray'}
			<img class="rounded-lg" width={500} src={tshirtGray} alt="" />
		{/if}
		{#if color === 'green'}
			<img class="rounded-lg" width={500} src={tshirtGreen} alt="" />
		{/if}
		{#if color === 'white'}
			<img class="rounded-lg" width={500} src={tshirtWhite} alt="" />
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
				<div style="max-width: 30%">
					<p
						style="
				margin-top: -90px;
				font-weight: 600;
				font-size: x-large;
				text-align: center;
			  "
						class={`text-xs text-${textColor}-500 lg:text-lg md:text-lg`}
					>
						{frontWord ?? "Mit mar Nyasaye oloyo mar niang'"}
					</p>
				</div>
			{/if}
		</div>
	</div>
</div>
