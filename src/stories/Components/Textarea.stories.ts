import type { Meta, StoryObj } from '@storybook/react';
import { ChangeEvent } from 'react';

import { AutoResizingTextarea } from '../../components/base/AutoResizingTextarea';

const meta: Meta<typeof AutoResizingTextarea> = {
  title: 'Components/Textarea/Textarea',
  component: AutoResizingTextarea,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AutoResizingTextarea>;

export const flexibleTextarea: Story = {
  args: {
    placeholder: "input your text",
    value: "hello world"
  }
};