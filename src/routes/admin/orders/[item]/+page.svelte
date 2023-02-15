<script>
	// @ts-nocheck
	import Hoodie from '../../../store/c/[category]/Hoodie.svelte';

	export let data = { order: {} };
	const totalAmount = data.order?.items?.reduce((prev, curr) => {
		return prev + curr.price;
	}, 0);
</script>

<div class="text-center my-9 text-3xl">
	<p>Order details</p>
</div>

<div class="lg:mx-48" >
	<h2>Order REF: {data?.order?.id}</h2>
	<p>
		Order Status: {data.order.status === 'placed'
			? 'Pending confirmation'
			: data.order.status === 'draft'
			? 'Draft order'
			: 'Confirmed'}
	</p>
	<p>Order Amount: {totalAmount}</p>or
	<hr />
	<div class="mt-9">
		<p class="text-2xl">Order Items:</p>
		{#each data.order?.items ?? [] as item}
			<div class="mt-2 bg-blue-200 p-2 rounded-lg">
				<Hoodie />
			</div>
		{/each}
	</div>
</div>
