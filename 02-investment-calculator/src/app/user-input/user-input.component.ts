import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserValues } from '../interfaces/user-values.interface';
import { ResultsService } from '../results/results.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  public initial: number = 0
  public annual: number = 0
  public expected: number = 0
  public duration: number = 0

  private resultsService = inject(ResultsService)
  @Output() showResults = new EventEmitter()

  public onSubmit(){
    const values: UserValues = {
      initial: this.initial,
      annual: this.annual,
      expected: this.expected,
      duration: this.duration
    }
    this.resultsService.setValues(values)
    this.showResults.emit(true)
  }
}
