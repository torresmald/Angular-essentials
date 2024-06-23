import { Component, Input, inject } from '@angular/core';
import { ResultsService } from './results.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
  @Input() public showResults?: boolean
  @Input() public results?: any
  
}
