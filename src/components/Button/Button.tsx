import './../Input/Input.css';
import perfectionist from 'eslint-plugin-perfectionist';
import { render, screen } from '@testing-library/react';
import { fileURLToPath } from 'url';
import './Button.css';
import { MouseEventHandler } from 'react';

export type ButtonProps = {
  disabled?: boolean;
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const obj = {
  name: 'test',
  surname: 'test',
};

const p = {
  get name(){
    console.log('')
  }
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
