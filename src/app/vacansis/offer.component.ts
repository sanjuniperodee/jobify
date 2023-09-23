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
  category: string= ""
  jobId: string= "";
  dataForm1= {
    'price' : '',
    'description' : '',
    'userId': '',
    'orderId': '',
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.jobId = id;
    }
    this.apiService.getJobs().subscribe((response: any) => {
      this.data = response.data;
      for(let i = 0; i < response.data.length; ++i){
        if(response.data[i].id == this.jobId){
          this.data = response.data[i]
        }
      }
      this.apiService.getCategories().subscribe((response) =>{
        console.log(response)
        for(let i = 0; i < response.length; ++i){
          if(response[i].id == this.data.category_id){
            this.category = response[i].description
          }
        }
      })

      console.log(this.data);
    });
  }



  // open(content:any) {
  //   this.modalService.open(content, { size: 'lg' });
  // }

  open(content:any) {
    this.modalService.open(content);
  }

  otklick():void{
    console.log(this.jobId)
    this.dataForm1.orderId=this.jobId
    if (localStorage.getItem("userId") != null) {
      // @ts-ignore
      this.dataForm1.userId = localStorage.getItem("userId").toString()
    }
    console.log(this.dataForm1)
    console.log(this.apiService.postOtklick(this.dataForm1).subscribe((response) =>{
      console.log(response)
    }))
  }

}
