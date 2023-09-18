import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserComponent } from 'src/app/registrtion.user/user.component';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


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

  constructor(config: NgbModalConfig, private modalService: NgbModal){}
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  open(content:any) {
    this.modalService.open(content);
  }

}
