import { Component} from '@angular/core';
import { UserService } from '../service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  login:any
  constructor(private service:UserService){}
  getUsers(){ 
    const login:String=''
    this.service.getUser().subscribe(
      (data)=>{
        this.login = data.login
        console.log(data)
        console.log(234)
      },
      (error) => {
        console.error(error);
        console.log(1)
      }
    )
  }
 
}