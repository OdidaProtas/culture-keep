<script>
	// @ts-nocheck

	export let data = { orders: [] };
	const { students } = data;
	const hasStudents = Boolean(students.length);
</script>

<div class="mt-20 mb-9 text-center text-3xl">
	<p>Students</p>
</div>

{#if !hasStudents}
	<div class="mt-20 text-center text-lg">
		<p>Sorry, but no students have signed up</p>
	</div>
{/if}

<div
	class="lg:mx-48 text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
>
	{#if hasStudents}
		{#each students as student}
			<a
				href={`/admin/students/${student.id}`}
				class="relative text-white hover:no-underline inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
			>
				<svg
					aria-hidden="true"
					class="w-20 h-20 mr-2 fill-current"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
						clip-rule="evenodd"
					/></svg
				>
				<div>
					<p>{student.name}</p>
					<p>{student.email}</p>
					<p>{student.status}</p>
				</div>
			</a>
		{/each}
	{/if}
</div>
