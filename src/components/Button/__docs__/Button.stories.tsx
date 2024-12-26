import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './../Button';

export default {
  component: Button,
  title: 'Button',
} as Meta<typeof Button>;

type Story = StoryObj<ButtonProps>;

export const ButtonDefault: Story = {
  args: {
    label: 'Button Default',
    onClick: () => alert('Default Button'),
  },
};

export const ButtonDisabled: Story = {
  args: {
    disabled: true,
    label: 'Button Disabled',
    onClick: () => alert('Disabled Button'),
  },
};
