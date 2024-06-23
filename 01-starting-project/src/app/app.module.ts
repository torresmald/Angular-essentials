import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksModule } from './tasks/tasks.module';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [TasksModule, BrowserModule, UserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
