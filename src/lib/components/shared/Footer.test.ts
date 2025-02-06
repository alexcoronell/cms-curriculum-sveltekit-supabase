import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import '@testing-library/jest-dom';

import Footer from './Footer.svelte';

describe('Footer Component', () => {
	it('should have the correct tag', () => {
		const { container } = render(Footer);
		const footerElement = container.querySelector('footer');
		expect(footerElement).toBeInTheDocument();
	});

	it('should have the correct class "Footer"', () => {
		const { container } = render(Footer);
		const footerElement = container.querySelector('.Footer');
		expect(footerElement).toBeInTheDocument();
	});

	it('should render the current year', () => {
		const currentYear = new Date().getFullYear();
		const { getByText } = render(Footer);
		const footerText = getByText(`© ${currentYear} - Built by Alex Coronell`);
		expect(footerText).toBeInTheDocument();
	});

    it('should display the current year and "Built by Alex Coronell" in the footer text', () => {
        // Obtener el año actual
        const currentYear = new Date().getFullYear();
    
        // Renderizar el componente
        const { getByText } = render(Footer);
    
        // Verificar que el texto incluye el año actual
        const footerText = getByText(`© ${currentYear} - Built by Alex Coronell`);
        expect(footerText).toBeInTheDocument();
      });
});
