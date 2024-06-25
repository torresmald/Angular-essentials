import { Component } from '@angular/core';
import { TrafficData } from '../../interfaces/trafficData.interface';

@Component({
  selector: 'app-traffic-status',
  standalone: true,
  imports: [],
  templateUrl: './traffic-status.component.html',
  styleUrl: './traffic-status.component.css'
})
export class TrafficStatusComponent {
  dummyTrafficData: TrafficData[] = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));

}
