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
			<p class="text-3xl mt-4">Admin</p>
		</div>
		<hr />
	</div>

	<div class="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 mt-9 lg:mx-48">
		<a href="/admin/words" class="hover:no-underline">
			<div class="bg-red-400 p-2 text-white rounded-lg text-lg hover:no-underline">Definitions</div>
		</a>
		<a href="/admin/students" class="hover:no-underline">
			<div class="bg-blue-400 p-2 text-white rounded-lg text-lg ">Students</div>
		</a>
		<a href="/admin/orders" class="hover:no-underline" >
			<div class="bg-purple-400 p-2 text-white rounded-lg text-lg">Orders</div>
		</a>
		<a href="/blog/my-posts" class="hover:no-underline" >
			<div class="bg-yellow-400 p-2 text-white rounded-lg text-lg">Blog</div>
		</a>
	</div>
</div>
