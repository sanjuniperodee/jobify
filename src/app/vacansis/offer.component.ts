import { Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import {Service} from "../service";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  constructor(private route: ActivatedRoute, private dialog:MatDialog, private apiService: Service, config: NgbModalConfig, private modalService: NgbModal) {}
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

  open(content:any) {
    this.modalService.open(content, { size: 'lg' });
  }


}
