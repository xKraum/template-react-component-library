import { ChangeEventHandler } from 'react';

import './Input.css';

export type InputProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  placeholder?: string;
};

export const Input = ({ onChange, placeholder = '', value }: InputProps) => (
  <input
    className="trcl"
    placeholder={placeholder}
    type="text"
    value={value}
    onChange={onChange}
  />
);
