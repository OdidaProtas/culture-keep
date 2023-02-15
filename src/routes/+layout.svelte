<script>
	import Header from './Header.svelte';
	import '../app.css';
	import './styles.css';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<div class="mt-16">
		<footer
			class="p-4 bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"
		>
			<ul class="flex flex-wrap items-center mt-6 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
				<li>
					<a href="/about" class="mr-4 hover:underline md:mr-6 ">About</a>
				</li>
				<li>
					<a href="/contact-us" class="hover:underline">Contact us</a>
				</li>
				<li>
					<a href="/support-us" class="ml-4 hover:underline md:mr-6">Support us</a>
				</li>
			</ul>
		</footer>
	</div>

	<!-- <div class="fixed z-50 bg-slate-800 text-white p-3 w-96 bottom-9 left-4 rounded-lg">
		<h3 class="text-lg">Cookies</h3>
		<p>
			This site uses cookies to serve you better. We do store cookies used to track your
			activities accross websites.
		</p>
		<button class="bg-blue-300 mt-3 text-black text-lg rounded-xl px-4 py-2">Accept</button>
	</div> -->
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
