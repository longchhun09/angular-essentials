import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  @Input({required: true}) id!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;
  protected readonly tasks = [
    { id: 't1', userId: 'u1', title: 'Task 1', summary: 'Task 1 summary', dueDate: '2025-10-31' },
    { id: 't2', userId: 'u2', title: 'Task 2', summary: 'Task 2 summary', dueDate: '2025-02-18' },
    { id: 't3', userId: 'u3', title: 'Task 3', summary: 'Task 3 summary', dueDate: '2025-09-23' },
  ];

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
