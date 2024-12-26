import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './../Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    label: 'Default Button',
    onClick: () => alert('Default Button'),
  },
};

export const DisabledButton: Story = {
  args: {
    disabled: true,
    label: 'Disabled Button',
    onClick: () => alert('Disabled Button'),
  },
};
