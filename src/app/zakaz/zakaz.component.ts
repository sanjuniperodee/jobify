import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {Service} from "../service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-zakaz',
  templateUrl: './zakaz.component.html',
  styleUrls: ['./zakaz.component.css']
})
export class ZakazComponent {
  constructor(private service:Service, private router: Router){}

  open:boolean=false
  zakazy:any
  ngOnInit() {
     // @ts-ignore
    this.service.getJobByUserId(localStorage.getItem("userId").toString()).subscribe((response) => {
       this.zakazy = response.data
      console.log(this.zakazy)
     })
  }
  openWindow(){
    return this.open= !this.open
  }
}
