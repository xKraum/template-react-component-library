import './../Input/Input.css';
import { render, screen } from '@testing-library/react';
import { fileURLToPath } from 'url';
import { MouseEventHandler } from 'react';
import './Button.css';
import perfectionist from 'eslint-plugin-perfectionist';

export type ButtonProps = {
  disabled?: boolean;
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const obj = {
  name: 'test',
  surname: 'test',
};

export const Button = ({
  disabled = false,
  label = 'Default',
  onClick = undefined,
}: ButtonProps) => (
  <button className="trcl" disabled={disabled} onClick={onClick}>
    {label}
  </button>
);
