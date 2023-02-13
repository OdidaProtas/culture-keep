<script>
	// @ts-nocheck

	// export let stock;
	// export let variation;
	export let frontWord;
	export let textColor = 'white';
	export let thumbnail = false;

	import { page } from '$app/stores';
	let q = $page.url.searchParams.get('q');

	import hoodie from '../../../../lib/assets/hoodie.png';
</script>

<div>
	<div style="position: relative; width: fit-content">
		<img class="rounded-lg" width={500} src={hoodie} alt="" />
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
						class={`text-xs text-${textColor} lg:text-lg md:text-lg`}
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
