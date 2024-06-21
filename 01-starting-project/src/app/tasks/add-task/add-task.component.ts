import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() public closeModal: EventEmitter<void> = new EventEmitter();
  @Output() public newTask: EventEmitter<Task> = new EventEmitter();
  public enteredTitle: string = '';
  public enteredSummary: string = '';
  public enteredDate: string = '';

  public onCloseModal() {
    this.closeModal.emit();
  }

  public onSubmit() {
    const task: Task = {
      id: '',
      userId: '',
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    }
    this.newTask.emit(task)
    this.closeModal.emit();


    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredDate = '';
  }
}
