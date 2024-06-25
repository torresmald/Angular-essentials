import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficStatusComponent } from './dashboard/traffic-status/traffic-status.component';
import { TicketsStatusComponent } from './dashboard/tickets-status/tickets-status.component';
import { DashboardItemComponent } from './shared/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServerStatusComponent, TrafficStatusComponent, TicketsStatusComponent, DashboardItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent  {

}
