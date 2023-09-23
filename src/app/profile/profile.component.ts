import { Component, OnInit} from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user:any
  constructor(private service:Service){}
  ngOnInit(){
    // @ts-ignore
    this.service.getUser(localStorage.getItem('userId').toString()).subscribe(
      (response)=>{
        this.user = response
        console.log(response)
      },
      (error) => {
        console.error(error);
        console.log(1)
      }
    )
  }

}
