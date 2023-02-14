<script>
	import { page } from '$app/stores';
	import { isAdmin } from '../../db/authbodge';
	const user = $page.data.session?.user;
</script>

<svelte:head>
	<title>Admin</title>
</svelte:head>
<div />

<div>
	<div class="flex align-middle justify-center h-full text-lg text-center mt-3">
		<div>
			<p>Admin management console</p>
		</div>
		<hr />
	</div>

	<div class="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 mt-9">
		<a href="/admin/words">
			<div class="bg-green-100 p-2 rounded-lg">Definitions</div>
		</a>
		<a href="/admin/orders">
			<div class="bg-green-100 p-2 rounded-lg">Orders</div>
		</a>
	</div>
</div>
