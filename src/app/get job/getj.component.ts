
import { style } from '@angular/animations';
import { Component } from '@angular/core';
import {Service} from "../service";

@Component({
  selector: 'app-getj',
  templateUrl: './getj.component.html',
  styleUrls: ['./getj.component.css']
})
export class GetjComponent {
  constructor(private service:Service){}
  categories:any
  data: any[] = [];

  ngOnInit(){
    this.service.getJobs().subscribe((response: any) => {
      this.data = response.data;
      console.log(this.data)
    });
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
