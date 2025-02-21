<script lang="ts">
	import Input from '$components/ui/form/Input.svelte';
	import TextArea from '$components/ui/form/TextArea.svelte';
	import Button from '$lib/components/ui/buttons/Button.svelte';

	/* Variables */
	let name: string = '';
	let email: string = '';
	let phone: string = '';
	let message: string = '';

	const validateName = () => {};
	const validateEmail = () => {};
</script>

<div class="ContactForm bg-backgroundsecondary special-shadow">
	<form class="Form">
		<Input label="Name" name="name" bind:value={name} validator={validateName} classes="lg:col-span-2 lg:mb-3" />
		<Input label="Email" name="email" bind:value={email} validator={validateEmail} classes=" lg:mb-3" />
		<Input label="Phone" name="phone" bind:value={phone} classes="lg:mb-3" />
		<TextArea label="Message" name="message" bind:value={message} rows={4}  classes="lg:col-span-2 lg:h-full lg:my-0" />
        <div class="Form__actions lg:col-span-2">
            <Button variant="primary" type="submit" classes="w-full lg:mt-3">Send</Button>
        </div>
	</form>
</div>

<style>
    .ContactForm {
        @apply p-10 rounded-3xl w-full max-lg:max-w-[400px] mx-auto lg:h-[500px] flex items-center justify-center max-lg:mb-6;
    }
    .Form {
  @apply relative w-full grid gap-y-2 lg:grid-cols-2 lg:gap-x-7 lg:h-full lg:py-6;
}

.Form:disabled {
  @apply opacity-80;
}
</style>