import { Component, computed, input, output } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {

  public userSelected = output<User>()
  public user =  input.required<User>()
  public selected =  input<boolean>()
  public avatar = computed(() => `assets/users/${this.user().avatar}`)


  public onSelectUser(){
    this.userSelected.emit(this.user())    
  }
}
