import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-pure-inbox-screen',
  standalone: true,
  imports: [CommonModule, TaskListComponent],
  templateUrl: './pure-inbox-screen.component.html',
  styleUrl: './pure-inbox-screen.component.css'
})
export class PureInboxScreenComponent {
  @Input() error: any;
}
