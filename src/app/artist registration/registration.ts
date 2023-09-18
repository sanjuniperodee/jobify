
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  step1Completed = false;
  step2Completed = false;
  step3Completed = false;
  activeStep = 1;

  nextStep() {
    if (this.activeStep === 1 && this.step1Completed) {
      this.activeStep = 2;
    } else if (this.activeStep === 2 && this.step2Completed) {
      this.activeStep = 3;
    }
  }

  prevStep() {
    if (this.activeStep > 1) {
      this.activeStep--;
    }
  }

}
