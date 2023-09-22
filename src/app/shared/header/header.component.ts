import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { UserComponent } from 'src/app/registrtion.user/user.component';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Service} from "../../service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() background: string = "";
  @Input() height: string = "100px";
  @Input() repeatMode: string = "no-repeat";
  @Input() backgroundSize: string = "cover";
  @Input() backgroundGradient: string = "linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0))";

  constructor(config: NgbModalConfig, private modalService: NgbModal, private service:Service, private router: Router){}
  menuOpen: boolean = false;
  loggedIn: boolean = false;
  user: any
  dataForm= {
    'username' : '',
    'password' : ''
  };
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  open(content:any) {
    this.modalService.open(content);
  }

  login(){
    const login = {
      username: this.dataForm.username,
      password: this.dataForm.password
    }
    console.log(login)
    this.service.login(login.username, login.password).subscribe(
      response => {
        console.log(response)
        this.service.storeToken(response.token);
        localStorage.setItem('userId', response.id);
        this.router.navigate(["/profile"])
      },
      error =>{
        console.log(error)
      }
    )
  }
  ngOnInit(){
    this.service.getUser().subscribe(
      (response)=>{
        console.log(response)
        this.user = response
        this.loggedIn = true
        console.log(this.loggedIn)
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
