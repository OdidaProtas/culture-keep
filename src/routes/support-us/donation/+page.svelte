<script>
	import { page } from '$app/stores';
	const user = $page.data.session?.user;
</script>

<div class="text-center mt-20 text-lg lg:px-48">
	<p>Learn Dholuo</p>
	<p class="mt-3">Enroll to Dholuo classes</p>

	<div class="mt-6">
		<form method="POST">
			<input
				required
				class="block mb-9 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl mt-24 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Contact phone"
				type="text"
				id="phone"
				name="phone"
			/>
			<input
				required
				class="block mb-9 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-3xl mt-24 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Contact phone"
				type="text"
				id="phone"
				name="phone"
			/>
			<button class="p-2 text-red-50 bg-blue-600  rounded-3xl"> Apply to our classes </button>
		</form>
	</div>
</div>
