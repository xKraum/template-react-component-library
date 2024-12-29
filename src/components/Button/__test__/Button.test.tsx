import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from '../Button';

describe('Button component', () => {
  const testFormat1 = 0;
  it('Button should render correctly', () => {
    const isTestLintError = true; // NOTE: Error?
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
