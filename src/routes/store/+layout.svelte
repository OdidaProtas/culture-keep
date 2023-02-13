<!-- <script>
	import { page } from '$app/stores';
	let q = $page.url.searchParams.get('q');
	let isDetail = /\/c/.test($page.url.pathname);
</script>

<svelte:head>
	<title>Store</title>
</svelte:head>



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

<main class="lg:px-36">
	<slot />
</main>

 -->


 <script>
	import { page } from '$app/stores';
	import Hoodie from './c/[category]/Hoodie.svelte';
	import Tshirt from './c/[category]/Tshirt.svelte';
	let q = $page.url.searchParams.get('q');

	import mug from '../../lib/assets/mug.jpg';
</script>
<main class="lg:px-36">
	<slot />
</main>
<div>
	<div class="relative px-3 lg:px-48">
		<div class="mx-auto max-w-2xl py-9 sm:py-48 lg:py-9">
			<div class="text-center">
				<p class=" text-gray-900 sm:text-3xl">
					Get <span class="text-orange-500" >custom</span>  swag
				</p>
				<div />
			</div>
		</div>
	</div>
</div>

<section class="dark:bg-gray-800 dark:text-gray-100">
	<div
		class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
	>
		<div
			class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
		>
			<div style="position:relative">
				<Hoodie frontWord={q ? q : 'Oyieyo chami to kudhi'} />
			</div>
		</div>
		<div
			class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left"
		>
			<h1 class="text-5xl font-bold leading-none sm:text-6xl">
				{q ? q : 'Oyieyo chami to kudhi'}
			</h1>
			<div
				class="flex mt-4 flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center"
			>
				<a
					rel="noopener noreferrer"
					href={`/store/c/hoodies${q ? `?q=${q}` : '?q=Oyieyo chami to kudhi'}`}
					class="px-8 py-3 text-lg rounded-3xl hover:no-underline font-semibold  dark:bg-violet-400 dark:text-gray-900"
					>Customize hoodie</a
				>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="dark:bg-violet-400">
		<div
			class="container flex flex-col items-center mx-auto text-center lg:pb-9 md:py-32 md:px-10 lg:px-32 dark:text-gray-900"
		>
			<h1 class="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
				{q ? q : "Mit mar Nyasaye oloyo mar niang'"}
			</h1>

			<div>
				<Tshirt frontWord={q ? q : 'Mit mar Nyasaye oloyo mar niang'} />
			</div>
			<div class="flex mt-6 flex-wrap justify-center">
				<a
					href={`/store/c/tshirts${q ? `?q=${q}` : '?q=Mit mar Nyasaye oloyo mar niang'}`}
					class="px-8 hover:no-underline py-3 m-2 rounded-3xl text-lg font-semibold  dark:bg-gray-800 dark:text-gray-50"
					>Customize Tshirts</a
				>
			</div>
		</div>
	</div>
</section>

<section class="p-6 dark:bg-gray-800 dark:text-gray-100">
	<div class="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div class="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
			<span class="block mb-2 dark:text-violet-400">Get a custom mug for any Word and phrase</span>
			<h1 class="text-5xl mt-2 font-extrabold dark:text-gray-50">
				{q ? q : 'Aketni e number mane?'}
			</h1>

			<form action="" class="self-stretch space-y-3 ng-untouched ng-pristine ng-valid pt-28">
				<a
					href={`/store/c/mugs${q ? `?q=${q}` : ''}`}
					class="btn w-full p-4 hover:no-underline  font-semibold rounded-3xl dark:bg-violet-400 dark:text-gray-900"
					>Buy {q ? `"${q}"` : ''} mugs</a
				>
			</form>
		</div>
		<img src={mug} alt="" class="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
	</div>
</section>

<style>
	.premium {
		color: var(--color-theme-1);
	}
</style>


