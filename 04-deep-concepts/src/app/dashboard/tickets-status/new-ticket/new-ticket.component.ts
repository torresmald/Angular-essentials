import { Component, ElementRef, ViewChild, inject, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { TicketsService } from '../tickets.service';
import { Ticket } from '../../../interfaces/ticket.interface';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // @ViewChild('formElement') private form?: ElementRef<HTMLFormElement>
  private form = viewChild<ElementRef<HTMLFormElement>>('formElement')
  private ticketsService = inject(TicketsService)


  public onSubmit(title: string, request: string){
    const ticket:Ticket = {title, request, status: 'open'}
    this.ticketsService.addTicket(ticket)
    this.form()?.nativeElement.reset()
  }
}
