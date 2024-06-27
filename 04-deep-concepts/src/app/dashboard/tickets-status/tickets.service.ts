import { Injectable } from '@angular/core';
import { Ticket } from '../../interfaces/ticket.interface';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  private tickets?: Ticket[] = [];

  get allTickets() {
    return this.tickets;
  }

  public changeStatus(ticket: Ticket){
    console.log(ticket);
    const findedTicket = this.tickets?.find((ticketFind) => ticketFind.id === ticket.id)
    findedTicket ? findedTicket.status = 'closed' : null
    console.log(findedTicket);
    
  }

  public addTicket(ticket: Ticket) {
    ticket.id = Math.random().toString();
    this.tickets?.push(ticket);
  }
}
