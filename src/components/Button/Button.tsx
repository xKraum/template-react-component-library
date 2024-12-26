import { MouseEventHandler } from 'react';
import './Button.css';

export type ButtonProps = {
  disabled?: boolean;
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
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
