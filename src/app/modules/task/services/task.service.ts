import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskStorageKey = 'tasks';

  private generateRandomId() {
    let id = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 10; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
  }

  getTasks(): Task[] {
    return JSON.parse(localStorage.getItem(this.taskStorageKey)!) || [];
  }

  saveTask(task: Task) {
    const tasks = this.getTasks();

    if (!task.id) {
      task.id = this.generateRandomId();
      tasks.push(task);
    } else {
      const taskIndex = tasks.findIndex(
        (filteredTask) => filteredTask.id === task.id
      );
      tasks[taskIndex] = task;
    }

    localStorage.setItem(this.taskStorageKey, JSON.stringify(tasks));
  }

  deleteTaskById(taskId: string) {
    const tasks = this.getTasks();
    const taskIndex = tasks.findIndex(
      (filteredTask) => filteredTask.id === taskId
    );
    tasks.splice(taskIndex, 1);

    localStorage.setItem(this.taskStorageKey, JSON.stringify(tasks));
  }

  public getTaskById(taskId: string): Task {
    const tasks = this.getTasks();
    return tasks.find((x) => x.id === taskId)!;
  }

  updateTasks(tasks: Task[]) {
    localStorage.setItem(this.taskStorageKey, JSON.stringify(tasks));
  }

  getFilteredTasks() {
    const allTasks = this.getTasks();

    return {
      inProgressTasks: allTasks.filter((task) => !task.isCompleted),
      completedTasks: allTasks.filter((task) => task.isCompleted),
    };
  }
}
