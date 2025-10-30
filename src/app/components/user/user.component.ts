import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from '@app/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`;
  }

  onSelectUser() {
    console.log('click user')
  }
}
