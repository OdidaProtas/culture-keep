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
<form action="/admin/orders/search" class="mb-6 lg:mx-48 flex gap-4">
	<div class="flex-1">
		<label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500"
			>Filter by
		</label>

		<select
			id="status"
			name="status"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		>
			<option value="draft">Draft</option>
			<option value="placed">Placed</option>
			<option value="confirmed">Confirmed</option>
			<option value="in-transit">In transit</option>
			<option value="fulfilled">Fullfilled</option>
			<option value="rejected">Rejected</option>
			<option value="error">Error</option>
		</select>
	</div>
	<div class="mt-7">
		<button class="bg-slate-800 px-4 py-2 rounded-xl text-white">Apply</button>
	</div>
</form>
{#if q}
	<div class="text-center mb-3">
		<a href="/admin/orders">Clear filters</a>
	</div>
{/if}
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
