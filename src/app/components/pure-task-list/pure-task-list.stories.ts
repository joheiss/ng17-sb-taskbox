import { Meta, StoryObj, argsToTemplate, componentWrapperDecorator } from "@storybook/angular";
import * as TaskStories from '../task/task.stories';
import { PureTaskListComponent } from "./pure-task-list.component";

const meta: Meta<PureTaskListComponent> = {
  component: PureTaskListComponent,
  title: 'PureTaskList',
  tags: ['autodocs'],
  decorators: [
    componentWrapperDecorator((story) => `<div style="margin: 3em">${story}</div>`),
  ],
  render: (args: PureTaskListComponent) => ({
    props: {
      ...args,
      onPinTask: TaskStories.actionsData.onPinTask,
      onArchiveTask: TaskStories.actionsData.onArchiveTask,
    },
    template: `<app-pure-task-list ${argsToTemplate(args)}></app-pure-task-list>`,
  }),
};

export default meta;

type Story = StoryObj<PureTaskListComponent>;

export const Default: Story = {
  args: {
    tasks: [
      { ...TaskStories.Basic.args?.task, id: '1', title: 'Task 1' },
      { ...TaskStories.Basic.args?.task, id: '2', title: 'Task 2' },
      { ...TaskStories.Basic.args?.task, id: '3', title: 'Task 3' },
      { ...TaskStories.Basic.args?.task, id: '4', title: 'Task 4' },
      { ...TaskStories.Basic.args?.task, id: '5', title: 'Task 5' },
      { ...TaskStories.Basic.args?.task, id: '6', title: 'Task 6' },
    ],
  },
};

export const WithPinnedTasks: Story = {
  args: {
    tasks: [
      ...(Default.args?.tasks?.slice(0, 5) || []),
      { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
    ],
  },
};

export const Loading: Story = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    ...Loading.args,
    loading: false,
  }
};
