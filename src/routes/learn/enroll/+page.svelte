<script>
	import { page } from '$app/stores';
	const user = $page.data.session?.user;
</script>

{#if !user}
	<div class="text-center mt-20 text-lg lg:px-48">
		<p class="mt-3">Enroll to Dholuo classes</p>
		<div class="mt-6">
			<form method="POST" class="text-length mt-20">
				<button class="py-2 px-4 text-red-50 bg-blue-600  rounded-3xl">
					Apply to our classes
				</button>
			</form>
		</div>
	</div>
{/if}

{#if user}
	<div class="text-center mt-20 text-lg lg:px-48">
		<p>Learn Dholuo</p>
		<div class="mt-20">
			<form action="">
				Please <a class="hover:no-underline" href="/auth/signin">sign in with your Google account</a
				> to request enrollment
			</form>
		</div>
	</div>
{/if}
