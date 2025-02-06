import { describe, it, expect, test } from 'vitest';
import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom';

import Header from './Header.svelte';

describe('Header Component', () => {
	test('should have the correct tag', () => {
		const { container } = render(Header);
		const headerElement = container.querySelector('header');
		expect(headerElement).toBeInTheDocument();
	});

	test('should have the correct class "Header"', () => {
		const { container } = render(Header);
		const headerElement = container.querySelector('.Header');
		expect(headerElement).toBeInTheDocument();
	});
});
