import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {

  constructor(){
    const task = localStorage.getItem('task')

    task ? this.tasks = JSON.parse(task) : undefined
  }
  private tasks: Task[] = [
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
  ];

  private setLocalStorage(){
    localStorage.setItem('task', JSON.stringify(this.tasks))
  }

  get lastTaskId() {
    const numerosExistentes = this.tasks.map((tarea) =>
      parseInt(tarea.id.substring(1), 10)
    );
    const proximoNumero = Math.max(...numerosExistentes) + 1;
    return `t${proximoNumero}`;
  }

  public getUserTask(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  public addNewTask(task: Task) {
    task.id = this.lastTaskId;
    this.tasks.push(task);
    this.setLocalStorage()
  }

  public onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.setLocalStorage()
  }
}
