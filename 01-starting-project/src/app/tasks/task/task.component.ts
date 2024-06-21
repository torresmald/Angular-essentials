import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { User } from '../../interfaces/user.interface';
import { CardComponent } from "../../shared/card/card.component";

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent]
})
export class TaskComponent {
  @Input({required: true}) public task!:Task
  @Output() public completed: EventEmitter<string> = new EventEmitter<string>()


  public onCompleteTask(){
    this.completed.emit(this.task.id)
  }
}
