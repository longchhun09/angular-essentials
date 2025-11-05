import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})

export class TaskComponent {
  @Input({required: true}) task!: Task;
  @Output() remove = new EventEmitter<string>();

  onRemove() {
    this.remove.emit(this.task.id);
  }
}
