import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ArchiveTask, PinTask } from 'src/app/state/task.state';
import { PureTaskListComponent } from '../pure-task-list/pure-task-list.component';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, PureTaskListComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks$?: Observable<any>;

  constructor(private store: Store) {
    this.tasks$ = store.select((state) => state.taskbox.tasks);
  }

  /**
   * Component method to trigger the archiveTask event
   */
  archiveTask(id: string) {
    this.store.dispatch(new ArchiveTask(id));
  }

  /**
   * Component method to trigger the pinTask event
   */
  pinTask(id: string) {
    this.store.dispatch(new PinTask(id));
  }
}
