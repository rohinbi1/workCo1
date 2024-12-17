import { Component, Input } from '@angular/core';
import { InvestmentService } from '../user-input/inverstment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.scss'],
})
export class InvestmentResultsComponent {
  // @Input() results?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];
  constructor(private investmentService: InvestmentService) {}
  get results() {
    return this.investmentService.results;
  }
}
