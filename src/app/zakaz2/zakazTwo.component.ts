import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-zakazTwo',
  templateUrl: './zakazTwo.component.html',
  styleUrls: ['./zakazTwo.component.css']
})
export class ZakazTwoComponent {
  @ViewChild('uploadedFilesList', { static: true }) uploadedFilesList!: ElementRef;


  selecktF(event:Event){

    const input  = event.target as HTMLInputElement
    const  files = input.files

    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Выводим информацию о загруженном файле в список
        const li = document.createElement('li');
        li.textContent = `${file.name} (${this.getFileSize(file.size)})`;

        this.uploadedFilesList.nativeElement.appendChild(li);
      }
    }
  }

  getFileSize(bytes: number): string {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    const i = parseInt(String(Math.floor(Math.log(bytes) / Math.log(1024))));
    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
  }

}
