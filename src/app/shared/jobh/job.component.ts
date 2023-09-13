import { Component } from '@angular/core';
import {Service} from "../../service";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
  data: any[] = [];

  constructor(private apiService: Service) {}

  ngOnInit(): void {
    this.apiService.getJobs().subscribe((response: any) => {
      this.data = response.content;
      console.log(this.data)
    });
  }
}
