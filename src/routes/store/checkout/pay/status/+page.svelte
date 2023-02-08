<script>
	function closeCart() {
		history.back();
	}
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
									Order Status
								</h2>
								<div class="ml-3 flex h-7 items-center">
									<button
										on:click={closeCart}
										type="button"
										class="-m-2 p-2 text-gray-400 hover:text-gray-500"
									>
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
									</button>
								</div>
							</div>

							<div class="mt-8">
								<div class="flex items-center p-3 bg-white shadow-md">
									<div class="w-6 h-6 mr-3">
										<svg class="fill-current text-teal-500" viewBox="0 0 24 24">
											<path
												d="M9.09,9.76C8.76,9.19 8.13,9 7.42,9A2.57,2.57 0 0,0 4.86,11.57C4.86,12.5 5.33,13.07 6.23,13.07C6.82,13.07 7.35,12.77 7.35,12.16V10.75H9.09V9.76M13.06,9C12.33,9 11.7,9.19 11.37,9.76L10.75,11.37H10.74A2.58,2.58 0 0,0 8.17,13.93C8.17,14.86 8.64,15.43 9.54,15.43C10.13,15.43 10.66,15.13 10.66,14.52V13.11H13.06V9M17.96,13.15C17.66,13.15 17.35,13.15 17.05,13.14V10.75H14.29V13.14C14,13.14 13.71,13.14 13.41,13.15L13.06,13.15V15.43C13.06,15.83 13.27,16.14 13.67,16.14H17.05C17.45,16.14 17.75,15.83 17.75,15.43V13.15L17.96,13.15Z"
											/>
										</svg>
									</div>
									<div>
										<p class="text-lg font-medium">Order Confirmed</p>
										<p class="text-gray-600">
											Your order has been confirmed and is being processed.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div class="border-t border-gray-200 py-6 px-4 sm:px-6">
							<div class="flex justify-between text-base font-medium text-gray-900">
								<p>Subtotal</p>
								<p>KES 0.00</p>
							</div>
							<p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
							<div class="mt-6">
								<a
									href="/store/checkout/pay/status"
									class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
									>Confirm payment</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
