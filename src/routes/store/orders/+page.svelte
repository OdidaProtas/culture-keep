<script>
	// @ts-nocheck

	export let data = { orders: [] };
	const { orders } = data;
	const hasOrders = Boolean(orders?.length);
	import { page } from '$app/stores';
	const user = $page.data.session?.user;
</script>

<!-- {#if user}
	<div class="mt-9 mb-20 text-center text-lg">
		<p>You must be logged in to view your orders</p>
		<p class="mt-6">
			<a href="/auth/signin">Login to your account</a>
		</p>
	</div>
{/if} -->

<div class="text-center my-9 text-3xl">
	<p>Track your orders</p>
</div>

{#if true}
	<div>
		{#if !hasOrders}
			<div class="text-center text-lg lg:mt-9">
				<p>You have not made any orders with us</p>
				<a href={`/store`}> Visit store </a>
			</div>
		{/if}

		<div class="mb-9">
			{#if hasOrders}
				<div class="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
					{#each orders as order}
						<a class="no-underline hover:no-underline" href={`/store/orders/${order.id}`}>
							<div class="mb-4  bg-blue-200 p-3 rounded-lg">
								<p>Order Ref: <span class="text-lg">{order.id}</span></p>
								<p>
									Status: {order.status === 'placed'
										? 'Pending confirmation'
										: order.status === 'draft'
										? 'Draft order'
										: 'Confirmed'}
								</p>
								<p>Items: {order.items.length}</p>
							</div>
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</div>
{/if}
