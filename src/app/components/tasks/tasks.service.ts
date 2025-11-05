import { Injectable } from '@angular/core';
import { NewTaskData, Task } from './task/task.model';

@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks: Task[] = [
    { id: 't1', userId: 'u1', title: 'Task 1', summary: 'Task 1 summary', dueDate: '2025-10-31' },
    { id: 't2', userId: 'u2', title: 'Task 2', summary: 'Task 2 summary', dueDate: '2025-02-18' },
    { id: 't3', userId: 'u3', title: 'Task 3', summary: 'Task 3 summary', dueDate: '2025-09-23' },
  ];

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      id: `t${this.tasks.length + 1}`,
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
  }

  removeTask(id: string) {
   this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
