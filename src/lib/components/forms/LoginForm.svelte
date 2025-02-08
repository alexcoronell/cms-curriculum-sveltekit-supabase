<script lang="ts">
	import Input from '$components/ui/form/Input.svelte';

	/* Variables */
	let email: string = '';
	let password: string = '';

	/* Functions */
	const validateEmail = () => {
		return;
	};

	const validatePassword = () => {
		return;
	};
</script>

<div class="LoginForm">
	<form>
		<Input
			label="Email"
			name="email"
			placeholder="Email"
			type="email"
			bind:value={email}
			validator={validateEmail}
		/>
		<Input
			label="Password"
			name="password"
			type="password"
			bind:value={password}
			validator={validatePassword}
		/>
	</form>
</div>
