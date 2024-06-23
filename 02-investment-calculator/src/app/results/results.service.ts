import { EventEmitter, Injectable, signal } from '@angular/core';
import { UserValues } from '../interfaces/user-values.interface';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  public resultsData = signal<any>([]);
  constructor() {}




  public calculateInvestmentResults(values: UserValues) {    
    const annualData = [];
    const { initial, duration, expected, annual } = values!;
    let investmentValue = initial;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expected / 100);
      investmentValue += interestEarnedInYear + annual;
      const totalInterest = investmentValue - annual * year - initial;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annual,
        totalInterest: totalInterest,
        totalAmountInvested: initial + annual * year,
      });
    }
    this.resultsData?.set(annualData)
  }
}
