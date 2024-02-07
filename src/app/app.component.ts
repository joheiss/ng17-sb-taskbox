import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxScreenComponent } from './components/inbox-screen/inbox-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, InboxScreenComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'taskbox';
}
