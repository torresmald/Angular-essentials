import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { CardComponent } from '../shared/card/card.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [UserComponent],
  imports: [CardComponent, CommonModule],
  exports: [UserComponent]
})
export class UserModule { }
