import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input() task?: Task;
  @Output() taskDelete = new EventEmitter<string>();

  handleTaskDelete(taskId: string) {
    this.taskDelete.emit(taskId);
  }
}
