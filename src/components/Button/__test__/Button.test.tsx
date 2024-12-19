import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Button from '../Button';

describe('Button component', () => {
  it('Button should render correctly', () => {
    const testLintError = true; // NOTE: Error?
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
