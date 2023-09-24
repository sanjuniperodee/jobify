import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {parseJson} from "@angular/cli/src/utilities/json-file";

@Injectable({
    providedIn: 'root'
})


export class Service {


    private apiUrl = 'http://86.107.44.200:8076'; // Замените на ваш URL сервера API

    constructor(private http: HttpClient) { }


    getUser(id: string): Observable<any> {
      console.log(localStorage.getItem('authToken'))
      const url = `${this.apiUrl}/api/v1/users/` + id
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      });
      return this.http.get<any>(url, {headers});
    }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers: headers,
      method: 'POST',
    };

    const body = { username, password };
    console.log(body)
    return this.http.post(`${this.apiUrl}/api/v1/auth/login`, body, options);
  }

  register(body:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers: headers,
      method: 'POST',
    };
    return this.http.post<any>(`${this.apiUrl}/api/v1/auth/logup`, JSON.stringify(body), options);

  }
  storeToken(token: string): void {
    localStorage.setItem('authToken', token);
  }
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
  removeToken(): void {
    localStorage.removeItem('authToken');
  }

  getJobs(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`,

    })
    const options = {
      headers: headers,
      method: "POST"
    }
    return this.http.get<any[]>("http://185.146.1.93:8000/get_jobs", {headers});
  }

  postOtklick(dataForm: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`,
    });
    console.log(dataForm)
    return this.http.post<any>("http://185.146.1.93:8000/add_otklick/" + dataForm.orderId + "/" + dataForm.userId + "/" + dataForm.description + "/" + dataForm.price , dataForm,{headers});
  }

  getJobByUserId(userId: string): any{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`,
    });
      return this.http.get<any>("http://185.146.1.93:8000/get_jobs_by_id/" + userId, {headers})
  }
  getJobById(jobId: string): any{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<any>("http://185.146.1.93:8000/get_job_by_id/" + jobId, {headers})
  }

  saveJob(body:any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`,
    });

    const options = {
      headers: headers,
      method: 'POST',
    };
    console.log(body)
    return this.http.post<any>("http://185.146.1.93:8000/save_job", JSON.stringify(body), options);
  }

  getCategories(): Observable<any[]> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.get<any[]>(this.apiUrl+"/jobs/category", {headers});
  }

}
