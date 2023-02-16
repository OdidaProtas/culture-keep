<script>
	// @ts-nocheck

	export let data = { orders: [] };
	const { orders } = data;
	const hasOrders = Boolean(orders.length);
	import { page } from '$app/stores';
	const q = $page.url.searchParams.get('status');
</script>

<div class="mt-20 mb-9 text-center text-lg">
	<p>Orders</p>
</div>

{#if !hasOrders}
	<div class="mt-20 text-center text-lg">
		<p>Sorry, but no orders have been made yet</p>
	</div>
{/if}

{#if q}
	<div class="text-center mb-3 mt-4">
		<p class="mb-8">Filter by status: {q}</p>
		<a href="/admin/orders">Clear filters</a>
	</div>
{/if}
{#if hasOrders}
	<div
		class="lg:mx-48  text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
	>
		{#if hasOrders}
			{#each orders as order, index}
				<a
					href={`/admin/orders/${order.id}`}
					class="relative inline-flex items-center hover:no-underline text-white  w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
				>
					<div>
						<p>
							{index + 1}: {order.id}
						</p>
						<p>
							Status: {order.status}
						</p>
					</div>
				</a>
			{/each}
		{/if}
	</div>
{/if}
