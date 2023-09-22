import { Component, Input } from '@angular/core';
import {Service} from "../service";

@Component({
  selector: 'app-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.css']
})
export class CreatingComponent {
  user:any
  @Input() height: string = "100px";
}
