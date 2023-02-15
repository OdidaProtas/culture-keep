<script>
	//@ts-nocheck
	export let data = { student: {} };
</script>

<div class="text-center my-9 text-3xl">
	<p>Student details</p>
</div>
<div class="lg:px-48">
	<p>Email: {data.student?.email}</p>
	<p>Status: {data.student?.status}</p>
</div>
