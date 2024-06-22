import { Component, Input, inject } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  public tasksService = inject(TasksService);

  @Input({ required: true }) public userSelected?: User;
  public showModalTask: boolean = false;

  get selectedUserTask() {
    return this.tasksService.getUserTask(this.userSelected!.id);
  }

  get userHaveTask() {
    return this.selectedUserTask.length > 0;
  }

  public onAddTask() {
    this.showModalTask = true;
  }

  public onCloseModal() {
    this.showModalTask = false;
  }
}
