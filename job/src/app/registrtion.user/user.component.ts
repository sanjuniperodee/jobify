import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UserComponent>,private service:UserService) {}

  // backdropClick(): void {
  //   this.dialogRef.close();
  // }

  request():void{
    const login = {
        username:'admin',
        password:'admin'
    }
    this.service.login(login).subscribe(
        response => {
            console.log(response)
            this.dialogRef.close();
        },
        error =>{
            console.log(error)
        }
        
    )
  }

  backdropClick(): void {
    this.dialogRef.close();
  }
}