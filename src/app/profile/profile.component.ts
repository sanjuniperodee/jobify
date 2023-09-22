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
    this.service.getUser().subscribe(
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
