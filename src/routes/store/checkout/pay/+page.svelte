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
									Order Payment
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
								<div class="flex flex-col items-center p-6 bg-white shadow-md">
									<h3 class="text-lg font-medium mb-4">Pay with MPesa</h3>
									<form>
										<div class="mb-4">
											<label class="block font-medium mb-2" for="phone-number">
												Phone Number
											</label>
											<input
												class="w-full border border-gray-400 p-2"
												id="phone-number"
												type="tel"
												placeholder="254712345678"
											/>
										</div>
									</form>
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
