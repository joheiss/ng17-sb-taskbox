import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { TaskComponent } from './task.component';

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const meta: Meta<TaskComponent> = {
  title: 'Task',
  component: TaskComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  render: (args: TaskComponent) => ({
    props: {
      ...args,
      onPinTask: actionsData.onPinTask,
      onArchiveTask: actionsData.onArchiveTask,
    },
    template: `<app-task ${argsToTemplate(args)}></app-task>`,
  }),
};

export default meta;

type Story = StoryObj<TaskComponent>;

export const Basic: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...Basic.args?.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Basic.args?.task,
      state: 'TASK_ARCHIVED',
    },
  },
};

export const LongTitle: Story = {
  args: {
    task: {
      ...Basic.args?.task,
      title: `
      This is going to be a very long text that will eventually be truncated on the screen. This is preferable behavior and makes a slim foot. Doesn't it? This is going to be a very long text that will eventually be truncated on the screen. This is preferable behavior and makes a slim foot. Doesn't it?
      `,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'A long text should be truncated and marked with an elipsis.',
      },
    },
  },
};
