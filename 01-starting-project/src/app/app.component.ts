import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy.users';
import { CommonModule } from '@angular/common';
import { User } from './interfaces/user.interface';
import { TasksComponent } from './tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public users?: User[] = DUMMY_USERS;
  public userSelected?: User


  public onSelectUser(user: User) {
    this.userSelected = user    
  }
}
