<script>
	// @ts-nocheck

	// export let stock;
	// export let variation;
	export let frontWord;
	export let thumbnail = false;

	import { page } from '$app/stores';
	let q = $page.url.searchParams.get('q');

	import mug from '../../../../lib/assets/mug.jpg';
</script>

<div style="position:relative">
	<img src={mug} alt="." width={300} class=" object-cover rounded-lg object-center " />
	{#if !thumbnail}
		<div class="absolute inset-0 flex items-center justify-center">
			<div
				style="max-width:50%; border-radius: 50%/10%"
				class="bg-blue-500 mr-14 rounded-t-lg rounded-b-lg p-2 "
			>
				<p class="text-center  text-sm lg:text-lg 	 text-white">
					{frontWord ?? "Mit mar Nyasaye oloyo mar niang'"}
				</p>
			</div>
		</div>
	{/if}
</div>
