import { Component, Input } from '@angular/core';
import { TrafficData } from '../interfaces/trafficData.interface';

@Component({
  selector: 'app-traffic-status',
  standalone: true,
  imports: [],
  templateUrl: './traffic-status.component.html',
  styleUrl: './traffic-status.component.css'
})
export class TrafficStatusComponent {
  @Input({required: true}) public dummyTrafficData: TrafficData[] = []
  @Input({required: true}) public maxTraffic: number = 0

}
