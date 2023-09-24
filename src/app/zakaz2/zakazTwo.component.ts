import { Component} from '@angular/core';
import {Service} from "../service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-zakazTwo',
  templateUrl: './zakazTwo.component.html',
  styleUrls: ['./zakazTwo.component.css']
})
export class ZakazTwoComponent {
  constructor(private service:Service, private router: Router){}
  dataForm= {
    'category_id': '1',
    'company': 'value1',
    'content_work': 'value1',
    'description': 'value1',
    'location': 'value1',
    'price': '123',
    'skills': 'value1',
    'subcategory_id': '1',
    'user_id': localStorage.getItem("userId"),
    'experience': '123123'
  };
  // this.dataForm.category_id, this.dataForm.company, this.dataForm.content_work, this.dataForm.description, this.dataForm.location,
  // this.dataForm.price, this.dataForm.skills, this.dataForm.subcategory_id, this.dataForm.user_id
   create(){
     this.service.saveJob(this.dataForm).subscribe(
       response => {
         console.log(response)
       },
       error =>{
         console.log(error)
       }
     )
   }
}
