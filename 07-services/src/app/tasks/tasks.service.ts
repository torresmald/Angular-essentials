import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);

public allTask = this.tasks.asReadonly()

  get lastTaskId() {
    const numerosExistentes = this.tasks().map((tarea) =>
      parseInt(tarea.id.substring(1), 10)
    );
    const proximoNumero = Math.max(...numerosExistentes) + 1;
    return `t${proximoNumero}`;
  }

  public addTask(task: Task) {
    task.id = this.lastTaskId;
    task.status = 'OPEN'
    this.tasks.update((oldTask) => 
        [...oldTask, task]
    )
  }

  public changeTaskStatus(id: string, status: TaskStatus) {    
    this.tasks.update((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, status: status } : task
      )
    );    
  }

  public filterTasks(filter: string){
    return this.tasks().filter((task) => {
        task.status === filter
    })
  }
}
