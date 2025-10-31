import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

interface User {
    id: string,
    name: string,
    avatar: string,
}
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent {
 @Input({ required: true}) user!: User;

  // @Output() select = new EventEmitter<void>();
  select = output<string>();

  public get imagePath() : string {
     return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
