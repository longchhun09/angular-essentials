import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  @Input({required: true}) name!: string;

  protected readonly tasks = [
    { id: 't1', userId: 'u1', title: 'Task 1', summary: 'Task 1 summary', dueDate: '2025-10-31' },
    { id: 't2', userId: 'u2', title: 'Task 2', summary: 'Task 2 summary', dueDate: '2025-02-18' },
    { id: 't3', userId: 'u3', title: 'Task 3', summary: 'Task 3 summary', dueDate: '2025-09-23' },
  ];

  get task() {
    return this.tasks[0];
  }
}
