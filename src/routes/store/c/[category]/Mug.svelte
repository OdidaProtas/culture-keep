<script>
	// @ts-nocheck

	// export let stock;
	// export let variation;
	export let frontWord;
	export let thumbnail = false;
	export let color = 'blue';
	export let textColor = 'black';

	import { page } from '$app/stores';
	import axios from 'axios';
	import { onMount } from 'svelte';
	let q = $page.url.searchParams.get('q');
	const user = $page.data.session?.user?.name;
	export let carouselOff = false;

	import mug from '../../../../lib/assets/mug.png';

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
			}, 3100);
			setInterval(() => {
				color = colors[Math.floor(Math.random() * colors.length)];
				if (color === 'black') {
					color = 'gray';
				}
				if (color === 'white') {
					textColor = 'black';
				} else textColor = 'white';
			}, 4800);
		}
	});
</script>

<div style="position:relative">
	<img src={mug} alt="." width={530} class=" object-cover rounded-lg object-center " />
	{#if !thumbnail}
		<div class="absolute inset-0 flex items-center justify-center">
			<div
				style="max-width:50%; border-radius: 50%/10%; min-height:144px; min-width:50%; align-items:center"
				class={`${
					color === 'white'
						? `bg-white`
						: color === 'pink'
						? 'bg-pink-500'
						: color === 'yellow'
						? 'bg-yellow-500'
						: color === 'black'
						? 'bg-black'
						: `bg-${color}-500`
				}  lg:mr-36 mr-20  rounded-t-lg  rounded-b-lg p-2 flex justify-center `}
			>
				<p class={`text-center  text-sm lg:text-lg 	 text-${textColor}`}>
					{frontWord ?? "Mit mar Nyasaye oloyo mar niang'"}
				</p>
			</div>
		</div>
	{/if}
</div>
