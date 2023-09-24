
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  firstName: string = '';
  lastName: string = '';
  telephone:any;
  mail: string = '';
  отчество: string = '';
  activeStep:number = 1;
  isNextButtonEnabled: boolean = false;
  professions: string ='';

  viborVak(profession:string){
    if(!this.professions){
      this.professions = profession;
    }
  }

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
    if (this.firstName !== '' && this.lastName !== ''&&this.mail!==''&&this.telephone!=='') {
      this.isNextButtonEnabled = true;
    } else {
      this.isNextButtonEnabled = false;
    }
  }

  onFileSelected(event:Event){
    const input = event.target as HTMLInputElement
    const files = input.files;
  }


}
