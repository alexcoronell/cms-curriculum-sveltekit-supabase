<script lang="ts">
	import Input from '$components/ui/form/Input.svelte';
	import Button from '$lib/components/ui/buttons/Button.svelte';

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
        <Button variant="primary" classes="w-full">Login</Button>

	</form>
</div>
