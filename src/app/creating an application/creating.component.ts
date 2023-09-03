import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.css']
})
export class CreatingComponent {
  @Input() height: string = "100px";
}
