import { describe, it, expect, beforeEach } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom';

import Header from './Header.svelte';

import { menu } from '$lib/core/data/menu.data';

describe('Header Component', () => {
	it('should have the correct tag', () => {
		const { container } = render(Header);
		const headerElement = container.querySelector('header');
		expect(headerElement).toBeInTheDocument();
	});

	it('should have the correct class "Header"', () => {
		const { container } = render(Header);
		const headerElement = container.querySelector('.Header');
		expect(headerElement).toBeInTheDocument();
	});

	it('should have the correct length of menu elements', () => {
		const { container } = render(Header);
		const menuElements = container.querySelectorAll('li');
		expect(menuElements.length).toBe(menu.length);
	})

	it('should be home the first menu element', () => {
		const { container } = render(Header);
		const firstMenuElement = container.querySelector('li');
		expect(firstMenuElement?.textContent).toBe(menu[0].title);
	})
});

describe('Header Responsive Menu Tests', () => {
	beforeEach(() => {
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: 1920
		});
	});

	it('should show open menu button and close menu button', () => {
		const { container } = render(Header);
		const openMenuButton = container.querySelector('#openMenuBtn');
		const closeMenuButton = container.querySelector('#closeMenuBtn');
		expect(openMenuButton).toBeInTheDocument();
		expect(closeMenuButton).toBeInTheDocument();
	});

	it('should menu be closed by default', () => {
		const { container } = render(Header);
		const menu = container.querySelector('#menu');
		expect(menu).toHaveClass('right-[-100%]');
	})

	it('should open menu when open menu button is clicked', async () => {
		const { container } = render(Header);
		const openMenuButton = container.querySelector('#openMenuBtn');

		const menu = container.querySelector('#menu');

		expect(menu).toHaveClass('right-[-100%]');

		if (openMenuButton) {
			await fireEvent.click(openMenuButton);
		}
		expect(menu).toHaveClass('right-0');
	})

	it('should open menu when open menu button is clicked', async () => {
		const { container } = render(Header);
		const openMenuButton = container.querySelector('#openMenuBtn');
		const closeMenuButton = container.querySelector('#closeMenuBtn');

		const menu = container.querySelector('#menu');

		expect(menu).toHaveClass('right-[-100%]');

		if (openMenuButton) {
			await fireEvent.click(openMenuButton);
		}

		if (closeMenuButton) {
			await fireEvent.click(closeMenuButton);
		}
		expect(menu).toHaveClass('right-[-100%]');
	})

});
