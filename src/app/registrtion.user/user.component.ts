import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Service } from '../service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<UserComponent>,private service:Service) {}

  request():void{
    const login = {
        username:'sanjuniperodee',
        password:'BekkhanN017'
    }
    this.service.login(login.username, login.password).subscribe(
        response => {
            if (response && response.token)
              this.service.storeToken(response.token);
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
