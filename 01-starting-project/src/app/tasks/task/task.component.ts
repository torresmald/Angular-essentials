import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent, CommonModule],
})
export class TaskComponent {
  private tasksService = inject(TasksService);
  @Input({ required: true }) public task!: Task;

  public onCompleteTask() {
    this.tasksService.onCompleteTask(this.task.id);
  }
}
