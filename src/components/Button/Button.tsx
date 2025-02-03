import './../Input/Input.css';
import { Input, InputProps } from '../Input/Input.tsx';
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

const { firstName, address1, id, lastName, onAdd, onUpdate } = objectTest;

type UserRole = 'user' | 'guest' | 'admin' | 'editor';

const enum VALUES {
  a3 = 'a3',
  A10 = 'A10',
  A2 = 'A2',
  C = 'C',
  B = 'B',
}

// Test: Prettier Insert `·`: eslint/prettier/prettier
// Test: Allowed unused vars must match /^_/u.eslint@typescript-eslint/no-unused-vars
const a ='';

// TEST: typescript-eslint/no-shadow
let x = 10;
function foo() {
  // TEST ESLint no-undef and curly
  if (true)
    console.log(y);

  let x = 20;

  // @typescript-eslint/no-use-before-define
  console.log(z);
  const z = true;
}

const foo = {
  bar: "baz",
  bar: "qux"
};


// NOTE: Storybook linter can be tested in *.stories.tsx files. For example the recommended rule `eslint/storybook/default-exports`

// Test: eslint recommended: eslint/no-compare-neg-zero and eslint/eqeqeq.
if (1 == -0) {
  // doSomething()...
}

// Test: typescript-eslint recommended: @typescript-eslint/ban-ts-comment
// @ts-ignore
console.log('');

// TEST: react/function-component-definition
// TEST: react/require-default-props
const Component = function ({ optionalAttribute }: { optionalAttribute?: string }) {
  return <div>{props.content}</div>;
};

// TEST: JSX A11y Recommended: jsx-a11y/label-has-associated-control
const getHtmlFor = () => {
  return (
    <>
      <label>Username</label>
      <input id="username" type="text" />
    </>
  );
};

// TEST: react/jsx-props-no-spreading
const getSpreadError = ({ disabled, ...rest }: InputProps) => {
  return (
    <>
      <Input {...rest} />
      <input {...rest} />
    </>
  );
};

const isTestIt = false;

const foo = (x) => { return x; }
const foo2 = (x) => x;

export const Button = ({
  disabled = false,
  label = 'Default',
  onClick = undefined,
}: ButtonProps) => {
  // Test eslint-plugin-react-hooks: react-hooks/rules-of-hooks
  const Bad = () => {
    for (let i = 0; i < 10; i++) {
      const [asd, setAsd] = useState('');
    }
  };

  // Test eslint-plugin-react: react/jsx-no-duplicate-props
  if (false) {
    return (
      <button
      className="trcl"
      disabled={disabled}
      another=""
      className=""
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
