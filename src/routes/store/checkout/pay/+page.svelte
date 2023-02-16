<script>
	// @ts-nocheck

	import { error } from '@sveltejs/kit';

	export let data = { payment: '' };
	let phone = '';
	export let form = { error: false };
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
									<div>
										<h3 class="text-lg font-medium mb-4">Pay with MPesa</h3>

										{#if form?.error}
											<div class="bg-red-200 p-2 rounded my-3 mt-20">
												<p>
													An error occured with your request. Try again or <a href="/support"
														>contact support</a
													> for help
												</p>
											</div>
										{/if}
										
										{#if form?.success}
											<div class="bg-green-200 p-2 rounded my-3 mt-20">
												<p>
													Payment request has been sent. Please enter your Mpesa pin to complete checkout
												</p>
											</div>
										{/if}
									</div>

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

								<div class="mt-4 w-full">
									<div class=" pt-6 ">
										<!-- {#if data.payment?.status === 'error'}
											<div class="p-2 bg-red-200 rounded-lg mb-3">
												<p class="text-lg">Request failed</p>
												<small color="text-blue-800">
													An error occured while processing your request. Check phone number and try
													again or contact support for help
												</small>
											</div>
										{/if} -->
										<div class="mb-4">
											<label for="phone">Phone number to receive payment request</label>
											<input
												class="w-full mt-4 border rounded-xl border-gray-400 p-2"
												id="phone"
												name="phone"
												type="tel"
												required
												bind:value={phone}
												placeholder="0712345678"
											/>
										</div>
									</div>
								</div>
								<div>
									{#if !form?.error}
										<div class="p-2 bg-blue-200 rounded-lg">
											<small color="text-blue-800">
												Your order will be confirmed upon successful payment.
											</small>
											<div class="mt-4">
												<a target="blank" class="hover:no-underline text-lg" href={`/store/orders`}
													>Track your order status here</a
												>
											</div>
										</div>
									{/if}
								</div>
							</div>

							<div class="border-t border-gray-200 py-6 px-4 sm:px-6">
								<div class="mt-6 w-full">
									{#if phone}
										<button
											class="flex items-center w-full justify-center hover:no-underline rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
											>Request payment</button
										>
									{:else}
										<span
											class="flex items-center hover:cursor-not-allowed justify-center rounded-md border border-transparent bg-gray-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700"
											>Request payment</span
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
</form>
