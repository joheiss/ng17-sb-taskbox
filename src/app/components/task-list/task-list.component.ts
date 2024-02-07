import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() set tasks(arr: Task[]) {
    const initialTasks = [
      ...arr.filter(t => t.state === 'TASK_PINNED'),
      ...arr.filter(t => t.state !== 'TASK_PINNED'),
    ];
    const filteredTasks = initialTasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED');
    this.tasksInOrder = filteredTasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED');
  }

  /** Checks if it's in loading state */
  @Input() loading = false;

  /** Event to change the task to pinned */
  @Output() onPinTask = new EventEmitter<Event>();

  /** Event to change the task to archived */
  @Output() onArchiveTask = new EventEmitter<Event>();

  /**
* @ignore
* Component property to define ordering of tasks
*/
  tasksInOrder: Task[] = [];

}
