
import { Component } from '@angular/core';
import {Service} from "../service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(private service:Service, private router: Router){}

  firstName: string = '';
  lastName: string = '';
  telephone:any;
  mail: string = '';
  activeStep:number = 1;
  isNextButtonEnabled: boolean = false;
  professions: string ='';

  formData = {
    'phone': "",
    "email": "",
    "firstName": "",
    "lastName": "",
    "password": "",
    "username": ""
  }

  viborVak(profession:string){
    this.professions = profession
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

  register(){
    console.log(this.formData)
    this.service.register(this.formData).subscribe(
      (response) => {
        console.log(response)
        alert("На почту пришло сообщение о подтверждение")
      }
    )
  }
  onFileSelected(event:Event){
    const input = event.target as HTMLInputElement
    const files = input.files;
  }
}
