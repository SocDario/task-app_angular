import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-list-layout',
  templateUrl: './list-layout.component.html',
  styleUrls: ['./list-layout.component.scss'],
})
export class ListLayoutComponent {
  @Input() inProgressTasks?: Task[];
  @Input() completedTasks?: Task[];
  @Output() tasksUpdated = new EventEmitter<Task[]>();
  @Output() taskDelete = new EventEmitter<string>();
  @Output() signOut = new EventEmitter();

  dropCard(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      if (event.item.data['isCompleted']) {
        event.item.data['isCompleted'] = false;
        event.item.data['completedTimestamp'] = undefined;
      } else {
        event.item.data['isCompleted'] = true;
        event.item.data['completedTimestamp'] = new Date().toISOString();
      }
    }

    const newTaskList = this.inProgressTasks?.concat(this.completedTasks!);
    this.tasksUpdated.emit(newTaskList);
  }

  handleProgressShown(taskType: 'development' | 'design') {
    if (
      this.completedTasks?.filter((task) => task.type === taskType).length ||
      this.inProgressTasks?.filter((task) => task.type === taskType).length
    ) {
      return true;
    }

    return false;
  }

  handleTaskDelete(taskId: string) {
    this.taskDelete.emit(taskId);
  }

  handleSignOut() {
    this.signOut.emit();
  }
}
