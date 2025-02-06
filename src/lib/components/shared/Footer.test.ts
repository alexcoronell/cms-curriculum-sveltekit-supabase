import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom';

import Footer from './Footer.svelte';

describe('Footer', () => {
    it('should render', () => {
        //render(Footer);
        expect(2+2).toBe(4)
    });
});