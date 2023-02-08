<script>
	import { page } from '$app/stores';
	let q = $page.url.searchParams.get('q');
</script>

<svelte:head>
	<title>Store</title>
</svelte:head>

{#if q}
	<div>
		<div class="relative px-3">
			<div class="mx-auto max-w-2xl py-9 sm:py-48 lg:py-9">
				<div class="text-center">
					<p class=" text-gray-900 sm:text-4xl">
						Get any Luo Dictionary word as a mug, t-shirt or sweatshirt
					</p>
					<div />
				</div>
			</div>
		</div>
	</div>
{/if}

{#if !q}
	<div class="bg-white">
		<main>
			<div class="relative px-3">
				<div class="mx-auto max-w-2xl py-9 sm:py-48 lg:py-9">
					<div class="text-center">
						<p class=" text-gray-900 sm:text-4xl">
							Get any Luo Dictionary word as a mug, t-shirt or sweatshirt
						</p>
						<div>
							<form class="my-24" action="/store/c">
								<label
									for="default-search"
									class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
									>Search</label
								>
								<div class="relative">
									<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
										<svg
											aria-hidden="true"
											class="w-5 h-5 text-gray-500 dark:text-gray-400"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
											/></svg
										>
									</div>
									<input
										type="search"
										id="q"
										name="q"
										class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Search..."
										required
									/>
									<button
										type="submit"
										class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
										>Search</button
									>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div
					class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				>
					<svg
						class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
						viewBox="0 0 1155 678"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
							fill-opacity=".3"
							d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
						/>
						<defs>
							<linearGradient
								id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
								x1="1155.49"
								x2="-78.208"
								y1=".177"
								y2="474.645"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#9089FC" />
								<stop offset="1" stop-color="#FF80B5" />
							</linearGradient>
						</defs>
					</svg>
				</div>
			</div>
		</main>
	</div>
{/if}

<main>
	<slot />
</main>
