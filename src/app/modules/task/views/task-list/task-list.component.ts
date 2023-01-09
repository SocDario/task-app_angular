import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { TaskAppRoutes } from 'src/app/modules/shared/enums/TaskAppRoutes';
import { Task } from '../../models/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent implements OnInit {
  inProgressTasks?: Task[];
  completedTasks?: Task[];

  constructor(
    private readonly authService: AuthService,
    private readonly taskService: TaskService,
    private readonly router: Router,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.handleGetTasks();
  }

  handleSignOut() {
    this.authService.handleSignOut();
    this.router.navigate([TaskAppRoutes.SignInPage]);
  }

  handleTasksUpdate(tasks: Task[]) {
    this.taskService.updateTasks(tasks);
    this.handleGetTasks();
  }

  handleTaskDelete(taskId: string) {
    this.taskService.deleteTaskById(taskId);

    this.handleGetTasks();

    this.snackBar.open('Task successfully deleted.', 'close', {
      duration: 2000,
    });
  }

  handleGetTasks() {
    const { inProgressTasks, completedTasks } =
      this.taskService.getFilteredTasks();

    this.inProgressTasks = inProgressTasks;
    this.completedTasks = completedTasks;
  }
}
