import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserComponent } from 'src/app/registrtion.user/user.component';

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

  constructor(private dialog: MatDialog){}


  
  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: 'My Modal',
      content: 'This is a sample modal content.',
    };

    // dialogConfig.width = '500px'; // Set the width of the modal
    // dialogConfig.height = '350px';
    // dialogConfig.position = { top: '-455%', left: '35%' };


    const dialogRef = this.dialog.open(UserComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(() => {
 
    });

    
  }
}
