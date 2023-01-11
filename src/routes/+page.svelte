<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="container">
	Logged in as {data.user}
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>
