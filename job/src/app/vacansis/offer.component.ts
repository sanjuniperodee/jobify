import { Component} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from '../modalka/modalka.component';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
    constructor(private dialog: MatDialog){}

    openModal() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        title: 'My Modal',
        content: 'This is a sample modal content.',
      };

      dialogConfig.width = '500px'; // Set the width of the modal
      dialogConfig.height = '300px';
      dialogConfig.position = { top: '-1797px', left: '505px' };


      const dialogRef = this.dialog.open(ModalComponent,dialogConfig);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('Modal closed with result:', result);
      });
    }
}
