import { Component, Input } from '@angular/core';

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
}
