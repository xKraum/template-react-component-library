import './../Input/Input.css';
import perfectionist from 'eslint-plugin-perfectionist';
import { render, screen } from '@testing-library/react';
import { fileURLToPath } from 'url';
import './Button.css';
// Test Perfectionist: perfectionist/sort-imports
import { MouseEventHandler, useState } from 'react';

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
  // Test: eslint recommended: eslint/getter-return
  get name(){
    console.log('')
  }
};

export const Button = ({
  disabled = false,
  label = 'Default',
  onClick = undefined,
}: ButtonProps) => {
  // Test eslint-plugin-react-hooks: react-hooks/rules-of-hooks
  function Bad() {
    for (let i = 0; i < 10; i++) {
      const [asd, setAsd] = useState('')
    }
  }

  // Test eslint-plugin-react: react/jsx-no-duplicate-props
  if (false) {
    return (
      <button className="trcl" className="" disabled={disabled} onClick={onClick}>
        <a href="foo">Click</a>
        {/* Test: JSX A11y: jsx-a11y/anchor-is-valid */}
        <a>Click</a>
        {label}
      </button>
    );
  }

  return (
    <button className="trcl" disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}
