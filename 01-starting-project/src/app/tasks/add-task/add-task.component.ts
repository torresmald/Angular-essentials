import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  public tasksService = inject(TasksService);

  @Input({ required: true }) public userId?: string = '';
  @Output() public closeModal: EventEmitter<void> = new EventEmitter();
  public enteredTitle: string = '';
  public enteredSummary: string = '';
  public enteredDate: string = '';

  public onCloseModal() {
    this.closeModal.emit();
  }

  public onSubmit() {
    const task: Task = {
      id: '',
      userId: this.userId!,
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    };

    this.tasksService.addNewTask(task);

    this.closeModal.emit();

    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredDate = '';
  }
}
