import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { CardComponent } from '../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TasksComponent, TaskComponent, AddTaskComponent],
  imports: [CardComponent, CommonModule, FormsModule],
  exports: [TasksComponent]
})
export class TasksModule { }
