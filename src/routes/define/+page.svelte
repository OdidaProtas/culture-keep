<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="">
	<h1>Define a word</h1>
	<p class="mb-6">
		All words in <a href="/">DHOLUO Dictionary</a> were written by people just like you. Now's your chance
		to add your own!
	</p>
	<p>
		Please review <a href="/guidelines">DHOLUO Dictionary content guidelines</a> before writing your
		definition. Here's the short version: Share definitions that other people will find meaningful and
		never post hate speech or people’s personal information.
	</p>

	<form class="mt-5">
		<div class="mb-6">
			<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>Word</label
			>
			<input
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Type the word to define"
				required
			/>
		</div>
		<div class="mb-6">
			<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>Your message</label
			>
			<textarea
				id="message"
				rows="4"
				class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Write your thoughts here..."
			/>

			<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>Your password</label
			>
			<input
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				required
				placeholder="Type your definition here"
			/>
		</div>
		<div class="flex items-start mb-6">
			<div class="flex items-center h-5">
				<input
					id="remember"
					type="checkbox"
					value=""
					class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
					required
				/>
			</div>
			<label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>Remember me</label
			>
		</div>
		<button
			type="submit"
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>Submit</button
		>
	</form>
</div>
