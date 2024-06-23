import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ResultsComponent } from './results/results.component';
import { ResultsService } from './results/results.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, ResultsComponent]
})
export class AppComponent {
  public showResults : boolean = false
  public results : any = []
  public resultsService = inject(ResultsService)


  public changeShow(){    
    this.showResults = true    
    this.results = this.resultsService.resultsData
    console.log(this.results);
    
  }


}
