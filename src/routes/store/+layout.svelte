<script>
	import { page } from '$app/stores';
	let q = $page.url.searchParams.get('q');
	let isDetail = /\/c/.test($page.url.pathname);
</script>

<svelte:head>
	<title>Store</title>
</svelte:head>

{#if q && !isDetail}
	<div>
		<div class="relative px-3">
			<div class="mx-auto max-w-2xl py-9 sm:py-48 lg:py-9">
				<div class="text-center">
					<p class=" text-gray-900 sm:text-4xl">
						Get any DHOLUO Dictionary word as a mug, t-shirt or sweatshirt
					</p>
					<div />
				</div>
			</div>
		</div>
	</div>
{/if}

{#if !q && !isDetail}
	<div class="bg-white">
		<main>
			<div class="relative px-3">
				
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
