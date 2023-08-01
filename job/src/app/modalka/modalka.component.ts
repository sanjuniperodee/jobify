import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modalka.component.html',
  styleUrls: ['./modalka.component.css']
})

export class ModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}