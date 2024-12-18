import { MouseEventHandler } from 'react';

export type ButtonProps = {
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ label = 'Default', onClick = undefined }: ButtonProps) => (
  <button onClick={onClick}>{label}</button>
);

export default Button;
