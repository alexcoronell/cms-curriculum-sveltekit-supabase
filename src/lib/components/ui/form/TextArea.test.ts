import { describe, it, expect } from "vitest";
import { render } from "@testing-library/svelte";
import '@testing-library/jest-dom';

import TextArea from "./TextArea.svelte";

describe('TextArea Component', () => {
    it('should have the correct tag', () => {
        const { container } = render(TextArea);
        const textareaElement = container.querySelector('textarea');
        expect(textareaElement).toBeInTheDocument();
    });
});