import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it, vitest } from 'vitest';

import { Input } from '../Input';

const renderInput = (value = '', onChange = vitest.fn()) => {
  render(<Input value={value} onChange={onChange} />);
  return screen.getByRole('textbox') as HTMLInputElement;
};

describe('Input component', () => {
  it('Input should render correctly', () => {
    const input = renderInput();
    expect(input).toBeInTheDocument();
  });

  it('should call onChange for each character typed', async () => {
    const user = userEvent.setup();
    const handleChange = vitest.fn();
    const textToInput = 'test';

    const input = renderInput('', handleChange);
    user.type(input, textToInput);

    await waitFor(() =>
      expect(handleChange).toHaveBeenCalledTimes(textToInput.length),
    );
  });
});
