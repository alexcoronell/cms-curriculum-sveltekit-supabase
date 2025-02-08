import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import '@testing-library/jest-dom';

import Button from './Button.svelte';

describe('Button Component', () => {
	it('should have the correct tag', () => {
		const { container } = render(Button);
		const buttonElement = container.querySelector('button');
		expect(buttonElement).toBeInTheDocument();
	});

	it('should have the correct class "btn"', () => {
		const { container } = render(Button);
		const buttonElement = container.querySelector('button');
		expect(buttonElement).toHaveClass('btn');
	});

	it('should have the correct class "btn-primary"', () => {
		const { container } = render(Button, { props: { variant: 'primary' } });
		const buttonElement = container.querySelector('button');
		expect(buttonElement).toHaveClass('btn--primary');
	});

	it('should have the correct class "btn-secondary"', () => {
		const { container } = render(Button, { props: { variant: 'secondary' } });
		const buttonElement = container.querySelector('button');
		expect(buttonElement).toHaveClass('btn--secondary');
	});

	it('should have the correct class "btn-light"', () => {
		const { container } = render(Button, { props: { variant: 'light' } });
		const buttonElement = container.querySelector('button');
		expect(buttonElement).toHaveClass('btn--light');
	});

	it('should be disabled', () => {
		const { container } = render(Button, { props: { disabled: true } });
		const buttonElement = container.querySelector('button');
		expect(buttonElement).toBeDisabled();
	});
});
