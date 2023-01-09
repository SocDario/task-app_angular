import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TaskRoutingModule } from './task-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TaskListComponent } from './views/task-list/task-list.component';
import { ListLayoutComponent } from './components/list-layout/list-layout.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskAddComponent } from './views/task-add/task-add.component';
import { SaveTaskFormComponent } from './components/save-task-form/save-task-form.component';
import { TaskEditComponent } from './views/task-edit/task-edit.component';
import { TaskProgressFormatPipe } from './pipes/task-progress-format.pipe';
import { TaskProgressCalculationPipe } from './pipes/task-progress-calculation.pipe';

@NgModule({
  declarations: [
    TaskListComponent,
    ListLayoutComponent,
    TaskCardComponent,
    TaskAddComponent,
    SaveTaskFormComponent,
    TaskEditComponent,
    TaskProgressFormatPipe,
    TaskProgressCalculationPipe,
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule,
    MatRadioModule,
    DragDropModule,
  ],
})
export class TaskModule {}
