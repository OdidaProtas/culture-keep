<script>
	// @ts-nocheck

	import Hoodie from '../c/[category]/Hoodie.svelte';
	import Mug from '../c/[category]/Mug.svelte';
	import Tshirt from '../c/[category]/Tshirt.svelte';

	function closeCart() {
		history.back();
	}
	export let data = { order: { items: [] } };

	const orderItems = data.order?.items ?? [];
	const totalAmount = orderItems?.reduce((prev, curr) => {
		return prev + (curr.price * curr.quantity);
	}, 0);
</script>

<div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
	<!--
      Background backdrop, show/hide based on slide-over state.
  
      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    -->
	<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

	<div class="fixed inset-0 overflow-hidden">
		<div class="absolute inset-0 overflow-hidden">
			<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
				<!--
            Slide-over panel, show/hide based on slide-over state.
  
            Entering: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-full"
              To: "translate-x-0"
            Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
              From: "translate-x-0"
              To: "translate-x-full"
          -->
				<div class="pointer-events-auto w-screen max-w-md">
					<div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
						<div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
							<div class="flex items-start justify-between">
								<h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
									Shopping cart
								</h2>
								<div class="ml-3 flex h-7 items-center">
									<a href="/store" type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
										<span class="sr-only">Close panel</span>
										<!-- Heroicon name: outline/x-mark -->
										<svg
											class="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</a>
								</div>
							</div>

							<div class="mt-8">
								<div class="flow-root">
									{#if !orderItems?.length}
										<div>
											<p>Your shopping basket is currently empty</p>
										</div>
									{/if}
									<ul class="-my-6 divide-y divide-gray-200">
										{#each orderItems as item, index}
											<li class="flex py-6">
												<div
													class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
												>
													{#if item.type === 'hoodies'}
														<Hoodie carouselOff={true} color={item.color} thumbnail={true} />
													{:else if item.type === 'tshirts'}
														<Tshirt carouselOff={true} color={item.color} thumbnail={true} />
													{:else}
														<Mug carouselOff={true} color={item.color} thumbnail={true} />
													{/if}
												</div>

												<div class="ml-4 flex flex-1 flex-col">
													<div>
														<div class="flex justify-between text-base font-medium text-gray-900">
															<h3>
																{item.word}
															</h3>
															<p class="ml-4">KES {item.price * item.quantity}</p>
														</div>
														<div class="flex justify-between mt-3">
															<div>
																{#if !(item.type === 'mugs')}
																	<p class="mt-1 text-sm text-gray-500">Size: {item.size}</p>
																{/if}
															</div>
															<div class="flex" >
																<form action="?/decrease" method="POST">
																	<input id="id" name="id" value={item.id} type="hidden" />
																	<button
																		class="bg-gray-500 text-white  px-4 mr-3 rounded-full -pt-2"
																		>-</button
																	>
																</form>
																<form action="?/increase" method="POST">
																	<input id="id" name="id" value={item.id} type="hidden" />
																	<button class="bg-gray-500 text-white  px-4 rounded-full"
																		>+</button
																	>
																</form>
															</div>
														</div>
													</div>
													<div class="flex flex-1 items-end justify-between text-sm">
														<p class="text-gray-500">Qty {item.quantity} x KES{item.price}</p>

														<div class="flex">
															<form action="?/remove" method="POST">
																<input id="id" name="id" value={item.id} type="hidden" />
																<button
																	type="submit"
																	class="font-medium text-indigo-600 hover:text-indigo-500"
																	>Remove</button
																>
															</form>
														</div>
													</div>
												</div>
											</li>
										{/each}
									</ul>
								</div>
							</div>
						</div>

						<div class="border-t border-gray-200 py-6 px-4 sm:px-6">
							<div class="flex justify-between text-base font-medium text-gray-900">
								<p>Subtotal</p>
								<p>KES {totalAmount}</p>
							</div>
							<p class="mt-0.5 text-sm text-gray-500">With Shipping and taxes.</p>
							<div class="mt-6">
								{#if orderItems.length > 0}
									<a
										href={`/store/checkout`}
										class="flex items-center justify-center hover:no-underline rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
										>Checkout</a
									>
								{:else}
									<span
										class="flex items-center hover:cursor-not-allowed justify-center rounded-md border border-transparent bg-gray-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700"
										>Checkout</span
									>
								{/if}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
