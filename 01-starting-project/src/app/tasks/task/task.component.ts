import { Component, Input, inject } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  private tasksService = inject(TasksService);
  @Input({ required: true }) public task!: Task;

  public onCompleteTask() {
    this.tasksService.onCompleteTask(this.task.id);
  }
}
