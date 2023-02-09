<script>
	// @ts-nocheck

	export let stock;
	export let variation;
	export let frontWord;

	import { page } from '$app/stores';
	let q = $page.url.searchParams.get('q');
</script>

<div style="position:relative">
	<img
		src={stock.hoodies[variation]}
		alt="."
		class="h-full w-full object-cover object-center lg:h-full lg:w-full"
	/>
	<div class="absolute inset-0 flex items-center justify-center">
		<p  class="text-center text-xl max-w-xs	 text-white">{frontWord}</p>
	</div>
</div>
