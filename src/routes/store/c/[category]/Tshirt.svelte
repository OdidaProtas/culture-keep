<script>
	// @ts-nocheck

	// export let stock;
	// export let variation;
	export let frontWord;
	export let thumbnail = false;

	import { page } from '$app/stores';
	let q = $page.url.searchParams.get('q');

	import tshirt from '../../../../lib/assets/tshirt.png';
</script>

<!-- <div style="position:relative">
	<img src={stock.tshirts[variation]} alt="." class=" object-cover object-center" />
	<div class="absolute inset-0 flex items-center justify-center">
		<h1 class="text-center  text-xl max-w-xs	 text-white">{frontWord}</h1>
	</div>
</div> -->

<div class="flex justify-center">
	<div style="position: relative; width: fit-content; margin-top: 40px">
		<img class="rounded-lg" width={600} src={tshirt} alt="" />
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
				margin-top: -60px;
				font-weight: 600;
				color: wheat;
				font-size: x-large;
				text-align: center;
			  "
						class="text-xs  lg:text-lg md:text-lg"
					>
						{frontWord ?? "Mit mar Nyasaye oloyo mar niang'"}
					</p>
				</div>
			{/if}
		</div>
	</div>
</div>
