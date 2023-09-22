import { Component} from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-otklik',
  templateUrl: './otklik.component.html',
  styleUrls: ['./otklik.component.css']
})
export class OtklikComponent {

  constructor(config: NgbModalConfig, private modalService: NgbModal){

  }

  open(content:any) {
    this.modalService.open(content);
  }
}
