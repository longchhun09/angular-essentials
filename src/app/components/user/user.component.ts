import { Component, Input, output } from '@angular/core';
import { User } from './user.model';
import { Card } from "@app/shared/card/card";

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent {
  @Input({ required: true}) user!: User;

  select = output<string>();

  public get imagePath() : string {
     return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
