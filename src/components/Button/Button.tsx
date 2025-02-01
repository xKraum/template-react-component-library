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

type Test = {
  firstName: string;
  lastName: string;
  id: number;
  isAvailable2: boolean;
  phone?: number;
  hasAvailability?: boolean;
  userId: number;
  identifier: string;
  someArray: string[];
  address1?: {
    city: string;
  };
  address2: {
    city: string;
    country?: string;
    street: string;
  };
  isAvailable1?: boolean;
  onAdd?: (id: number) => void;
  onUpdate: (id: number) => void;
  optionalMethod?: () => {
    property: string;
  };
};

const objectTest: Test = {
  firstName: 'test',
  lastName: 'test',
  id: 1,
  isAvailable2: true,
  userId: 1,
  identifier: 'test',
  onUpdate: (id: number) => {
    console.log(id);
  },
  someArray: ['test'],
  address1: {
    city: 'test',
  },
  address2: {
    city: 'test',
    street: 'test',
  },
  onAdd: (id: number) => {
    console.log(id);
  },
};

const { id, address1, firstName, lastName, onAdd, onUpdate } = objectTest;

type UserRole = 'user' | 'guest' | 'admin' | 'editor';

const enum VALUES {
  a3 = 'a3',
  A10 = 'A10',
  A2 = 'A2',
  C = 'C',
  B = 'B',
}

// Test: Prettier Insert `·`: eslint/prettier/prettier
const a ='';

// NOTE: Storybook linter can be tested in *.stories.tsx files. For example the recommended rule `eslint/storybook/default-exports`

// Test: eslint recommended: eslint/no-compare-neg-zero and eslint/eqeqeq.
if (1 == -0) {
  // doSomething()...
}

// Test: typescript-eslint recommended: @typescript-eslint/ban-ts-comment
// @ts-ignore
console.log('');

export const Button = ({
  disabled = false,
  label = 'Default',
  onClick = undefined,
}: ButtonProps) => {
  // Test eslint-plugin-react-hooks: react-hooks/rules-of-hooks
  function Bad() {
    for (let i = 0; i < 10; i++) {
      const [asd, setAsd] = useState('');
    }
  }

  // Test eslint-plugin-react: react/jsx-no-duplicate-props
  if (false) {
    return (
      <button
        className="trcl"
        className=""
        disabled={disabled}
        onClick={onClick}
      >
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
};
