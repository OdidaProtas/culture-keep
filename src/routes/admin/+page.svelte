<script>
	import { page } from '$app/stores';
	import { isAdmin } from '../../db/authbodge';
	const user = $page.data.session?.user;
	import { signIn } from '@auth/sveltekit/client';
</script>

<svelte:head>
	<title>Admin</title>
</svelte:head>
<div />

{#if !user}
	<div class="text-center mt-20">
		<div class="text-lg">
			Access to this page has been denied. You must be logged in with an administrator account
		</div>
		<a href="/">Back to Homepage</a>
	</div>
{/if}

{#if user}
	<div>
		{#if isAdmin(user.email)}
			<div class="flex align-middle justify-center h-full text-lg text-center mt-3">
				<div>
					<p>Admin management console</p>
				</div>
				<hr />
			</div>

			<div class="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 mt-9">
				<a href="/admin/words">
					<div class="bg-green-100 p-2 rounded-lg">Flagged words</div>
				</a>
				<a href="/admin/orders">
					<div class="bg-green-100 p-2 rounded-lg">Orders</div>
				</a>
			</div>
		{:else}
			<div class="text-center text-lg mt-20">
				You must be logged in as admin. Contact 0793871876 for help
			</div>
			<div class="text-center mt-9">
				<a href="/" class="mt-9">Take me back to the home page</a>
			</div>
		{/if}
	</div>
{/if}
