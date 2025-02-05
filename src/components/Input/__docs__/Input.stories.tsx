import type { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';

import { Input, InputProps } from './../Input';

export default {
  component: Input,
  title: 'Input',
} as Meta<typeof Input>;

const Template: StoryFn<InputProps> = (props: InputProps) => {
  const [value, setValue] = useState(props.value || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <Input {...props} value={value} onChange={handleChange} />;
};

export const InputDefault = Template.bind({});
InputDefault.args = {
  placeholder: '',
  value: '',
};

export const InputWithPlaceholder = Template.bind({});
InputWithPlaceholder.args = {
  placeholder: 'Search...',
  value: '',
};

export const InputWithText = Template.bind({});
InputWithText.args = {
  placeholder: 'Search...',
  value: 'Some text',
};
