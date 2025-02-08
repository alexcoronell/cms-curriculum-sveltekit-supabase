import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom';

import Input from './Input.svelte';

describe('Input Component', () => {
    it('should have the correct tag', () => {
        const { container } = render(Input);
        const inputElement = container.querySelector('input');
        expect(inputElement).toBeInTheDocument();
    });
});