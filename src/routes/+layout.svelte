<script>
	import Header from './Header.svelte';
	import '../app.css';
	import './styles.css';
	import { onMount } from 'svelte';
	import { diId } from './id';

	onMount(() => {
		let deviceID = localStorage.getItem('ld-id');
		if (deviceID) {
			diId.set(deviceID);
		} else {
			let random = Math.round(Math.floor(Math.random() * (Math.random() * 123666)));
			let date = Date.now();
			let idDraft = `${random}${date}`;
			localStorage.setItem('ld-id', idDraft);

			diId.set(idDraft);
		}
	});
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<div>
		<footer
			class="p-4 bg-white  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"
		>
			
			<ul class="flex flex-wrap items-center mt-6 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
				<!-- <li>
					<a href="/about" class="mr-4 hover:underline md:mr-6 ">About</a>
				</li>
				<li>
					<a href="/" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
				</li>
				 -->
				<li>
					<a href="/contact-us" class="hover:underline">Contact us</a>
				</li>
				<li>
					<a href="/support-us" class="ml-4 hover:underline md:mr-6">Support us</a>
				</li>
			</ul>
			<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-2"
				>Made with ❤ by <a target="blank" href="https://linkedin.com/in/brian-odida" class="hover:underline">Protas Okoth Odida</a> & <a target="blank" href="https://twitter.com/Thriving_luos">DHOLUO Dictionary</a>
			</span>
		</footer>
	</div>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		/* display: flex; */
		/* flex-direction: column; */
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
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
