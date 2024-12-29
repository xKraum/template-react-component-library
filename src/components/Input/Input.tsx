import { ChangeEventHandler } from 'react';
import './Input.css';

export type InputProps = {
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const Input = ({ onChange, placeholder = '', value }: InputProps) => {
  const isTtest = true;
  return (
    <input
      className="trcl"
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};
