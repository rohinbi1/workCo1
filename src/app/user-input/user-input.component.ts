import { Component, EventEmitter, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import type { InvestmentInput } from './investment-input.model';
import { InvestmentService } from './inverstment.service';
@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  EnteredDuration = '10';
  constructor(private investmentService: InvestmentService) {}
  onSubmit() {
    console.log(
      this.enteredInitialInvestment,
      this.enteredAnnualInvestment,
      this.enteredExpectedReturn,
      this.EnteredDuration
    );
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.EnteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    });
    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment,
    //   duration: +this.EnteredDuration,
    //   expectedReturn: +this.enteredExpectedReturn,
    //   annualInvestment: +this.enteredAnnualInvestment,
    // });
    this.onReset();
  }
  onReset() {
    this.enteredInitialInvestment = '0';
    this.enteredAnnualInvestment = '0';
    this.enteredExpectedReturn = '5';
    this.EnteredDuration = '10';
  }
}
