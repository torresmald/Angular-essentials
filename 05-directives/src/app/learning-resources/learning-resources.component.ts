import { Component } from '@angular/core';
import { ExitDirective } from './exit.directive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [ExitDirective]
})
export class LearningResourcesComponent {}
