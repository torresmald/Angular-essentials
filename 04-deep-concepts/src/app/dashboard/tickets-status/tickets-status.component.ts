import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

@Component({
  selector: 'app-tickets-status',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './tickets-status.component.html',
  styleUrl: './tickets-status.component.css'
})
export class TicketsStatusComponent {

}
