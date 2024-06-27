import { Component, Input, inject, signal } from '@angular/core';
import { Ticket } from '../../../interfaces/ticket.interface';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input() public ticket?:Ticket
  private ticketsService = inject(TicketsService)
  public showTicket = signal<boolean>(false)

  public onCompleteTask(ticket: Ticket){
    this.ticketsService.changeStatus(ticket)    
  }

  public onHideTicket(){
    this.showTicket.set(!this.showTicket())
  }
}
