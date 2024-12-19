import { ChangeEventHandler } from 'react';

export type InputProps = {
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Input = ({ onChange, placeholder = '', value }: InputProps) => (
  <input
    className="bg-red-100"
    placeholder={placeholder}
    type="text"
    value={value}
    onChange={onChange}
  />
);

export default Input;
