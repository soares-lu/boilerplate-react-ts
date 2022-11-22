import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './index';

export default {
  title: 'Atoms/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Primary: ComponentStory<typeof Input> = () => <Input />;
