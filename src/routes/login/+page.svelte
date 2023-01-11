<script>
	import { enhance } from '$app/forms';
</script>

<div class="container">
	<form action="?/login" method="POST" use:enhance>
		<input type="email" name="email" />
		<input type="password" name="password" />
		<button type="submit">Login</button>
	</form>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>
