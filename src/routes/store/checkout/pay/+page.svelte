<script>
	// @ts-nocheck
	function closeCart() {
		history.back();
	}

	export let data = { payment: '' };
	let phone = '';

	import { diId } from '../../../id';
</script>

<form method="POST">
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
						<div class="flex h-full  flex-col overflow-y-scroll bg-white shadow-xl">
							<div class="flex-1 overflow-y-auto pt-6 px-4 sm:px-6">
								<div class="flex items-start justify-between">
									<h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
										Order Payment
									</h2>
									<div class="ml-3 flex h-7 items-center">
										<a
											href="/store/basket"
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
										</a>
									</div>
								</div>

								<div class="mt-8 w-full">
									<div class=" pt-6 ">
										<h3 class="text-lg font-medium mb-4">Pay with MPesa</h3>

										{#if data.payment?.status === 'error'}
											<div class="p-2 bg-red-200 rounded-lg mb-3">
												<p class="text-lg">Request failed</p>
												<small color="text-blue-800">
													An error occured while processing your request. Check phone number and try
													again or contact support for help
												</small>
											</div>
										{/if}
										<div class="mb-4">
											<input
												class="w-full border border-gray-400 p-2"
												id="phone"
												name="phone"
												type="tel"
												required
												bind:value={phone}
												placeholder="254712345678"
											/>
										</div>
									</div>
								</div>
								<div>
									{#if data.payment}
										<div class="p-2 bg-blue-200 rounded-lg">
											<p class="text-lg">You will receive a prompt to enter your MPESA Pin</p>
											<small color="text-blue-800">
												Your order will be confirmed upon successful payment.
											</small>
											<div class="mt-4">
												<a href={`/store/orders?ref=${$diId}`}>Track your order status here</a>
											</div>
										</div>
									{/if}
								</div>
							</div>

							<div class="border-t  border-gray-200 py-6 px-4 sm:px-6">
								<div class="mt-6">
									<button class="bg-green-800 text-white rounded-lg p-2">Request payment</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</form>
