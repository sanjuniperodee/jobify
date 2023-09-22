import { Component, OnInit} from '@angular/core';
import {Service} from "../../service";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories:any
  constructor(private service:Service){}
  ngOnInit(){
    this.service.getCategories().subscribe(
      (response)=>{
        this.categories = response
        console.log(response)
        this.categories = response
      },
      (error) => {
        console.error(error);
        console.log(1)
      }
    )
  }

}
