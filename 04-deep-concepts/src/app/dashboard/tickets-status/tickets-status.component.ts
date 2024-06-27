import { Component, inject } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from '../../interfaces/ticket.interface';
import { TicketsService } from './tickets.service';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets-status',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets-status.component.html',
  styleUrl: './tickets-status.component.css'
})
export class TicketsStatusComponent {
  private ticketsService = inject(TicketsService)

  get allTickets(){
    return this.ticketsService.allTickets
  }
}
