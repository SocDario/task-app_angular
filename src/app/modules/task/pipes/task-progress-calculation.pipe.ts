import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/Task';

@Pipe({
  name: 'taskProgressCalculation',
})
export class TaskProgressCalculationPipe implements PipeTransform {
  transform(
    inProgressTasks: Task[],
    completedTasks: Task[],
    taskType: 'development' | 'design'
  ): number {
    const inProgressTasksOfType = inProgressTasks.filter(
      (task) => task.type === taskType
    );
    const completedTasksOfType = completedTasks.filter(
      (task) => task.type === taskType
    );

    const totalTasks =
      completedTasksOfType.length + inProgressTasksOfType.length;
    const completedTasksCount = completedTasksOfType.length;

    return this.getTaskProgressNumeric(completedTasksCount, totalTasks);
  }

  private getTaskProgressNumeric(
    inProgressTasksCount: number,
    totalTasks: number
  ) {
    return (inProgressTasksCount / totalTasks) * 100;
  }
}
