import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PureInboxScreenComponent } from '../pure-inbox-screen/pure-inbox-screen.component';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-inbox-screen',
  standalone: true,
  imports: [CommonModule, PureInboxScreenComponent],
  templateUrl: './inbox-screen.component.html',
  styleUrl: './inbox-screen.component.css'
})
export class InboxScreenComponent {
  error$: Observable<boolean>;
  constructor(private store: Store) {
    this.error$ = store.select((state) => state.taskbox.error);
  }
}
