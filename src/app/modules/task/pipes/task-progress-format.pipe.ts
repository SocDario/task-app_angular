import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/Task';

@Pipe({
  name: 'taskProgressFormat',
})
export class TaskProgressFormatPipe implements PipeTransform {
  transform(
    inProgressTasks: Task[],
    completedTasks: Task[],
    taskType: 'development' | 'design'
  ): string {
    const inProgressTasksOfType = inProgressTasks.filter(
      (task) => task.type === taskType
    );
    const completedTasksOfType = completedTasks.filter(
      (task) => task.type === taskType
    );

    const totalTasks =
      completedTasksOfType.length + inProgressTasksOfType.length;
    const completedTasksCount = completedTasksOfType.length;

    return `${completedTasksCount} / ${totalTasks}`;
  }
}
