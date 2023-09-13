import { Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ModalComponent } from '../modalka/modalka.component';
import {Service} from "../service";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  constructor(private route: ActivatedRoute, private dialog:MatDialog, private apiService: Service) {}
  data: any
  jobId: string= "";

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.jobId = id;
    }
    this.data = this.apiService.getJobById(this.jobId).subscribe((response: any) => {
      this.data = response;
      console.log(this.data);
      console.log(123)
    });
  }

    openModal() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = {
        title: 'My Modal',
        content: 'This is a sample modal content.',
      };

      // dialogConfig.width = '350px';
      // dialogConfig.height = '400px';



      const dialogRef = this.dialog.open(ModalComponent,dialogConfig);

      dialogRef.backdropClick().subscribe(() => {
        dialogRef.close();
      });


    }
}
