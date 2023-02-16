<script>
	// @ts-nocheck

	function closeCart() {
		history.back();
	}

	export let data = { order: {} };

	export let form = { success: false };

	import { page } from '$app/stores';
	const basketId = $page.url.searchParams.get('device-id');
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
				<div class="pointer-events-auto w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700">
					<div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
						<div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
							<div class="flex items-start justify-between">
								<h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
									Address form
								</h2>
								<div class="ml-3 flex h-7 items-center">
									<a href="/store/basket" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
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
								{#if form?.success}
									<div class="p-2 bg-green-200 m-4 rounded-xl">
										<p>Address saved</p>
									</div>
								{/if}
								<form method="POST" class="w-full max-w-lg">
									<div class="flex flex-wrap -mx-3 mb-6" />
									<div class="flex flex-wrap -mx-3 mb-6">
										<div class="w-full px-3">
											<label
												class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
												for="grid-password"
											>
												Contact phone
											</label>
											<input
												bind:value={data.order.contactPhone}
												id="contactPhone"
												required
												type="number"
												name="contactPhone"
												class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											/>
										</div>
									</div>
									<div class="flex flex-wrap -mx-3 mb-2">
										<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
											<label
												class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
												for="grid-city"
											>
												City
											</label>
											<input
												class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
												name="city"
												id="city"
												type="text"
												required
												bind:value={data.order.city}
												placeholder="Nairobi"
											/>
										</div>
										<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
											<label
												class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
												for="grid-state"
											>
												Town
											</label>
											<input
												class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
												id="town"
												name="town"
												type="text"
												required
												bind:value={data.order.town}
												placeholder="CBD"
											/>
										</div>
										<div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
											<label
												class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
												for="grid-zip"
											>
												Location
											</label>
											<input
												id="location"
												required
												placeholder="Landmarks"
												name="location"
												bind:value={data.order.location}
												class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
												type="text"
											/>
										</div>
									</div>
									<button
										type="submit"
										class="flex items-center justify-center mt-9 rounded-md border border-transparent bg-indigo-600 px-6 py-2 w-full text-base font-medium text-white shadow-sm hover:bg-indigo-700"
										>Update</button
									>
								</form>
							</div>
						</div>

						<div class="border-t border-gray-200 py-6 px-4 sm:px-6">
							<div class="mt-6">
								{#if data.order.location && data.order.items.length}
									<a
										href={`/store/checkout/pay`}
										class="flex items-center justify-center hover:no-underline rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
										>Proceed to payment</a
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
