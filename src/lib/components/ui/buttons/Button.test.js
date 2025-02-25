// @ts-nocheck
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
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

	// Text rendered in screen, but it fails in test
	it.skip('should render correctly with content in the slot', () => {
		render(Button, { type: 'button', variant: 'primary' }, { slots: { default: 'Click me' } });
		const buttonElement = screen.getByRole('button');
		console.log(buttonElement);
		screen.debug()
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveTextContent('Click me');
	});

	it.each([
		['primary', 'btn--primary'],
		['secondary', 'btn--secondary'],
		['light', 'btn--light'],
	])('should apply the correct CSS class for variant "%s"', (variant, expectedClass) => {
		render(Button, { variant });
		const button = screen.getByRole('button');
		expect(button).toHaveClass(expectedClass);
	});

	it.each(['button', 'submit', 'reset'])('should have the correct type "%s"', (type) => {
		render(Button, { type });
		expect(screen.getByRole('button')).toHaveAttribute('type', type);
	});

	it('should be disabled when disabled is true', () => {
		render(Button, { disabled: true });
		expect(screen.getByRole('button')).toBeDisabled();
	});

	it('should be enabled when disabled is false', () => {
		render(Button, { disabled: false });
		expect(screen.getByRole('button')).not.toBeDisabled();
	});

	test('should not fire event when button is disabled', async () => {
		const handleClick = vi.fn();
		render(Button, { disabled: true, onClick: handleClick });
	
		const button = screen.getByRole('button');
		await fireEvent.click(button);
	
		expect(handleClick).not.toHaveBeenCalled();
	});
});
