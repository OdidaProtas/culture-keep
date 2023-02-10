<script>
	// @ts-nocheck

	export let data = { orders: [] };
	const { orders } = data;
	const hasOrders = Boolean(orders.length);
</script>

{#if !hasOrders}
	<div class="text-center text-lg lg:mt-20">
		<p>You have not made any orders with us</p>
	</div>
{/if}

{#if hasOrders}
	{#each orders as order}
		<a href={`/store/orders/${order.id}`}>
			<div class="mb-4  bg-blue-200 p-3 rounded-lg">
				<p>Order Ref: <span class="text-lg">{order.id}</span></p>
			</div>
		</a>
	{/each}
{/if}
