<script>
	// @ts-nocheck

	export let stock;
	export let variation;
	export let frontWord;

	import { page } from '$app/stores';
	let q = $page.url.searchParams.get('q');
</script>

<div style="position:relative">
	<img src={stock.mugs[variation]} alt="." height="200" class=" object-cover object-center " />
	<div class="absolute inset-0 flex items-center justify-center">
		<div class="bg-blue-500 mr-20 rounded-t-lg rounded-b-lg p-2 " style="border-radius: 50%/10%">
			<p class="text-center text-xl max-w-xs lg:text-4xl	 text-white">{frontWord}</p>
		</div>
		
	</div>
</div>
