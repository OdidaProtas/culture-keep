<script>
	import { page } from '$app/stores';
	import { isAdmin } from '../../db/authbodge';
	let user = $page.data.session?.user;
</script>

{#if isAdmin(user?.email)}
	<slot />
{/if}

{#if !isAdmin(user?.email)}
<div class="text-center mt-20">
		<div class="text-lg">
			Access to this page has been denied. You must be logged in with an administrator account
		</div>
		<a href="/">Back to Homepage</a>
	</div>
{/if}
