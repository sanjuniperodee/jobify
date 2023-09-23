import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute} from "@angular/router";
import {Service} from "../service";

@Component({
  selector: 'app-otklik',
  templateUrl: './otklik.component.html',
  styleUrls: ['./otklik.component.css']
})
export class OtklikComponent {

  constructor(config: NgbModalConfig, private modalService: NgbModal, private route: ActivatedRoute, private apiService: Service){

  }
  id:any
  data:any
  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.apiService.getJobById(this.id).subscribe((response) =>{
      this.data = response.data
      console.log(response.data)
      for(let i = 0; i < this.data.otkliki.length; ++i){
        this.apiService.getUser(this.data.otkliki[i].user_id).subscribe((response) =>{
          this.data.otkliki[i].user = response
        })
      }
      console.log(this.data)
    })
  }

  open(content:any) {
    this.modalService.open(content);
  }
}
