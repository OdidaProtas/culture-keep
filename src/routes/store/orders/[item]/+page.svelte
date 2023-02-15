<script>
	// @ts-nocheck

	import Hoodie from '../../c/[category]/Hoodie.svelte';

	export let data = { order: {} };
	const totalAmount = data.order?.items?.reduce((prev, curr) => {
		return prev + curr.price;
	}, 0);

	let payment = data.order?.payment;
</script>

<div class="text-center my-9 text-3xl">
	<p>Order details</p>
</div>

{#if payment?.responseCode === '0' && !payment?.mpesaReceipt}
	<div class="bg-blue-200 p-2 rounded-lg my-4 text-left">
		<h4 class="text-lg">Payment Details</h4>
		<p class="mt-4">
			{payment.customerMessage}. Please complete the transaction by entering your MPESA pin.
		</p>
		<small>You can refresh this page for a status update</small>
	</div>
{/if}

{#if payment?.responseCode === '0' && payment?.mpesaReceipt}
	<div class="bg-green-200 p-2 rounded-lg my-4 text-left">
		<h4 class="text-lg">Payment Details</h4>
		<p class="mt-4">Your payment for this order has been received, and processed successfully.</p>
		<p class="text-lg">MPesa Receipt: payment?.mpesaReceipt</p>
		<small>You can refresh this page for a status update</small>
	</div>
{/if}

{#if payment?.responseCode === '1111'}
	<div class="bg-red-200 p-2 rounded-lg my-4 text-left">
		<h4 class="text-lg">Payment Details</h4>
		<p class="mt-4">An error occured while processing your request</p>
	</div>
{/if}

{#if payment?.responseCode !== '1111' && payment?.responseCode !== '0'}
	<div class="bg-red-200 p-2 rounded-lg my-4 text-left">
		<h4 class="text-lg">Payment Details</h4>
		<p class="mt-4">An error occured while processing your request</p>
		<p>Error Details: {payment?.customerMessage}</p>
	</div>
{/if}

<div class="my-16">
	{#if data?.order?.payment?.status === 'error'}
		<div class="p-2 bg-red-200 rounded-lg mb-3">
			<p class="text-lg">Payment error</p>
			<small color="text-blue-800">
				An error occured while processing your request. Check phone number and try again or contact
				support for help
			</small>
		</div>
	{/if}
</div>

<div>
	<h2>Order REF: <span class="text-lg">{data?.order?.id}</span></h2>
	<p>
		Order Status: <span class="text-lg">
			{data?.order?.status === 'placed'
				? 'Pending confirmation'
				: data?.order?.status === 'draft'
				? 'Draft order'
				: 'Confirmed'}
		</span>
	</p>
	<p>Order Amount: <span class="text-lg">KES {totalAmount}</span></p>
	<hr />

	<h3 class="text-lg mt-5">Delivery Address</h3>
	<hr />
	<h2>City: <span class="text-lg">{data.order?.city}</span></h2>
	<h2>Town: <span class="text-lg">{data.order?.town}</span></h2>
	<h2>Location: <span class="text-lg">{data.order?.location}</span></h2>

	<div class="mt-9 mb-48">
		<p class="text-2xl">{data.order?.items.length} Order Items:</p>
		<div class="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
			{#each data.order?.items ?? [] as item}
				<div class="mt-2 bg-blue-200 p-2 rounded-lg">
					<Hoodie carouselOff={true } frontWord={item.word} />
					<p>Color: {item.color}</p>
					<p>Quantity: {item.quantity}</p>
					<p>Size: {item.size}</p>
					<p>Price: KES {item.price}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
