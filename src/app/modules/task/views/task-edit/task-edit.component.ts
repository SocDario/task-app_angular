import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskAppRoutes } from 'src/app/modules/shared/enums/TaskAppRoutes';
import { Task } from '../../models/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent implements OnInit {
  task?: Task;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly taskService: TaskService,
    private readonly snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const taskId = this.route.snapshot.params['id'];

    if (taskId) {
      this.task = this.taskService.getTaskById(taskId);
      return;
    }

    this.snackBar.open('Unable to find selected task', 'close', {
      duration: 3000,
    });
  }

  handleFormSubmit(updatedTask: Task) {
    this.taskService.saveTask({
      ...updatedTask,
      id: this.task?.id,
      updatedTimestamp: new Date().toISOString(),
      createdTimestamp: this.task?.createdTimestamp,
    });

    this.snackBar.open('Task successfully updated.', 'close', {
      duration: 3000,
    });

    this.router.navigate([TaskAppRoutes.ListPage]);
  }
}
