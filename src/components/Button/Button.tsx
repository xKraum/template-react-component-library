import { MouseEventHandler } from 'react';
import './Button.css';

export type ButtonProps = {
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({
  label = 'Default',
  onClick = undefined,
}: ButtonProps) => (
  <button className="trcl" onClick={onClick}>
    {label}
  </button>
);
