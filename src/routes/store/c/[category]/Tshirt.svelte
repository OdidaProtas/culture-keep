<script>
	// @ts-nocheck

	export let stock;
	export let variation;
	export let frontWord;

    console.log(frontWord)

	import { page } from '$app/stores';
	let q = $page.url.searchParams.get('q');
</script>

<div style="position:relative">
	<img src={stock.tshirts[variation]} alt="." class=" object-cover object-center" />
	<div class="absolute inset-0 flex items-center justify-center">
		<h1 class="text-center  text-xl max-w-xs	 text-white">{frontWord}</h1>
	</div>
</div>
