import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TaskAppRoutes } from 'src/app/modules/shared/enums/TaskAppRoutes';
import { Task } from '../../models/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent {
  constructor(
    private readonly taskService: TaskService,
    private readonly router: Router,
    private readonly snackBar: MatSnackBar
  ) {}

  handleFormSubmit(task: Task) {
    this.taskService.saveTask({
      ...task,
      createdTimestamp: new Date().toISOString(),
    });

    this.snackBar.open('Task successfully added.', 'close', {
      duration: 3000,
    });

    this.router.navigate([TaskAppRoutes.ListPage]);
  }
}
