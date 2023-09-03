import { Component} from '@angular/core';

@Component({
  selector: 'app-zakaz',
  templateUrl: './zakaz.component.html',
  styleUrls: ['./zakaz.component.css']
})
export class ZakazComponent {
  open:boolean=false

  openWindow(){
    return this.open= !this.open
  }
}
