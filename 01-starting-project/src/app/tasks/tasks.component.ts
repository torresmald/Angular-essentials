import { Component, Input } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { Task } from '../interfaces/task.interface';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) public userSelected?: User
  public showModalTask: boolean = false;

  public tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get selectedUserTask(){
    return this.tasks.filter((task) => task.userId === this.userSelected?.id)
  }

  get userHaveTask(){
    return this.selectedUserTask.length > 0
  }

  get lastTaskId(){
    // Extraer los números de los IDs
    const numerosExistentes = this.tasks.map(tarea => parseInt(tarea.id.substring(1), 10));
    
    // Calcular el próximo número
    const proximoNumero = Math.max(...numerosExistentes) + 1;
    
    // Retornar el próximo ID
    return `t${proximoNumero}`;
  }

  public onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  public onAddTask(){
    this.showModalTask = true
  }

  public onCloseModal(){
    this.showModalTask = false
  }

  public onAddNewTask(task: Task){
    task.userId = this.userSelected!.id
    task.id = this.lastTaskId
    this.tasks.push(task)
  }

}
