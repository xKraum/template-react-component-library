import { MouseEventHandler } from 'react';

export type ButtonProps = {
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({
  label = 'Default',
  onClick = undefined,
}: ButtonProps) => <button onClick={onClick}>{label}</button>;
