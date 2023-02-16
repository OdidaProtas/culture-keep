<script>
	// @ts-nocheck
	import Hoodie from '../../../store/c/[category]/Hoodie.svelte';
	import Mug from '../../../store/c/[category]/Mug.svelte';
	import Tshirt from '../../../store/c/[category]/Tshirt.svelte';

	export let data = { order: {} };
	export let form = { success: false };
	const totalAmount = data.order?.items?.reduce((prev, curr) => {
		return prev + curr.price * curr.quantity;
	}, 0);
</script>

<div class="text-center my-9 text-3xl">
	<p>Order details</p>
</div>

{#if form?.success}
	<div class="text-left my-9 bg-green-200 p-2 rounded-xl lg:mx-48">
		<p>Order status updated</p>
	</div>
{/if}
<form method="POST">
	<div class="mb-6 lg:mx-48">
		<label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
			>Update order status
			<select
				id="status"
				value={data.order.status}
				name="status"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			>
				<option value="phrase">Draft</option>
				<option value="placed">Placed</option>
				<option value="confirmed">Confirmed</option>
				<option value="pending">In transit</option>
				<option value="pending">Fullfilled</option>
				<option value="rejected">Rejected</option>
				<option value="error">Error</option>
			</select>
		</label>
		<button class="bg-slate-800 text-white px-4 py-1 rounded-lg"> Apply</button>
	</div>
</form>

<div class="lg:mx-48">
	<h2>Order REF: {data?.order?.id}</h2>
	<p>
		Order Status: {data.order.status}
	</p>
	<p>Order Amount: {totalAmount}</p>
	<h3 class="text-lg mt-5">Delivery Address</h3>
	<hr />
	<h2>City: <span class="text-lg">{data.order?.city}</span></h2>
	<h2>Town: <span class="text-lg">{data.order?.town}</span></h2>
	<h2>Location: <span class="text-lg">{data.order?.location}</span></h2>

	<div class="mt-9">
		<p class="text-2xl">Order Items:</p>
		{#each data.order?.items ?? [] as item}
			<div class="mt-2 bg-blue-200 p-2 rounded-lg">
				{#if item.type === 'hoodies'}
					<Hoodie carouselOff={true} textColor={item.textColor} frontWord={item.word} />
				{:else if item.type === 'tshirts'}
					<Tshirt carouselOff={true} textColor={item.textColor} frontWord={item.word} />
				{:else}
					<Mug carouselOff={true} textColor={item.textColor} frontWord={item.word} />
				{/if}
				<p>Color: {item.color}</p>
				<p>Quantity: {item.quantity}</p>
				<p>Size: {item.size}</p>
				<p>Price: KES {item.price}</p>
			</div>
		{/each}
	</div>
</div>
