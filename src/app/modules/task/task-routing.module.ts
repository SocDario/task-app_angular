import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAppRoutes } from '../shared/enums/TaskAppRoutes';
import { TaskListComponent } from './views/task-list/task-list.component';
import { TaskAddComponent } from './views/task-add/task-add.component';
import { TaskEditComponent } from './views/task-edit/task-edit.component';

const routes: Routes = [
  {
    path: TaskAppRoutes.ListPage,
    component: TaskListComponent,
  },
  {
    path: TaskAppRoutes.AddTaskPage,
    component: TaskAddComponent,
  },
  {
    path: `${TaskAppRoutes.EditTaskPage}/:id`,
    component: TaskEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
