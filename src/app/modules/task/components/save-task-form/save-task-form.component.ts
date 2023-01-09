import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Task } from '../../models/Task';

@Component({
  selector: 'save-task-form',
  templateUrl: './save-task-form.component.html',
  styleUrls: ['./save-task-form.component.scss'],
})
export class SaveTaskFormComponent implements OnInit {
  @Input() taskToUpdate?: Task;
  @Output() formSubmited = new EventEmitter<Task>();

  saveTaskForm = this.fb.nonNullable.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    type: ['', [Validators.required]],
  });

  constructor(private readonly fb: FormBuilder) {}

  get title() {
    return this.saveTaskForm.get('title');
  }

  get description() {
    return this.saveTaskForm.get('description');
  }

  get type() {
    return this.saveTaskForm.get('type');
  }

  ngOnInit() {
    if (this.taskToUpdate) {
      this.saveTaskForm.patchValue({
        title: this.taskToUpdate.title,
        description: this.taskToUpdate.description,
        type: this.taskToUpdate.type,
      });
    }
  }

  handleFormSubmit() {
    this.formSubmited.emit({
      title: this.title?.value!,
      description: this.description?.value!,
      isCompleted: false,
      type: this.type?.value!,
    });
  }
}
