<script>
	//@ts-nocheck
	import { page } from '$app/stores';
	const user = $page.data.session?.user;
	export let data = { user: {} };
</script>

{#if user &&  data?.student && data.student.status === 'pending-confirmation'}
	<div class="p-2 rounded-lg-bg-green-200 text-center text-lg mt-20 text-black">
		<p class="mb-4 text-lg">Hello {user?.name?.split(' ')[0]}</p>
		<p>Your request for enrollment has been received.</p>
		<p class="mt-9 text-sm">You will receive an email with further instructions</p>
		<div class="mt-20 ">
			<a class="hover:no-underline" href="/">Search words</a>
			<a class="ml-9 hover:no-underline" href="/store">Shop customized wear</a>
			<a class="ml-9 hover:no-underline" href="/sverdle">Play a guessing game</a>
		</div>
	</div>
{/if}

{#if !data?.student}
	{#if user}
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
	
{/if}

{#if !user}
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
