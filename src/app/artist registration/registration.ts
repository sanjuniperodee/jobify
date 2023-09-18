
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  firstName: string = '';
  lastName: string = '';
  отчество: string = '';
  activeStep:number = 1;
  isNextButtonEnabled: boolean = false;

  goToStep(stepNumber:number){
    const element = document.getElementById(`step${stepNumber}`)
    if(element){
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest'})
      this.activeStep = stepNumber
      this.checkFormValidity();
    }
  }

  goBack(){
    if(this.activeStep >1){
      this.goToStep(this.activeStep - 1);
      this.checkFormValidity();
    }
  }



  checkFormValidity() {
    if (this.firstName !== '' && this.lastName !== '') {
      this.isNextButtonEnabled = true;
    } else {
      this.isNextButtonEnabled = false;
    }
  }

}
