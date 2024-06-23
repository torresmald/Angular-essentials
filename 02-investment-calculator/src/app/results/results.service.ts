import { EventEmitter, Injectable } from '@angular/core';
import { UserValues } from '../interfaces/user-values.interface';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  private userValues?: UserValues;
  public resultsData?: any;
  constructor() {}

  get values() {
    return this.userValues;
  }

  public setValues(values: UserValues) {
    this.userValues = values;
    this.resultsData = this.calculateInvestmentResults();
  }

  public calculateInvestmentResults() {
    const annualData = [];
    const { initial, duration, expected, annual } = this.userValues!;
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
    console.log(annualData);
    return annualData;
  }
}
