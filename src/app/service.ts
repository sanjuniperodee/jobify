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


    getUser(): Observable<any> {
      console.log(localStorage.getItem('authToken'))
      const url = `${this.apiUrl}/api/v1/users/` + localStorage.getItem('userId')
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authToken')
      });
      return this.http.get<any[]>(url, {headers});
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
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${this.getToken()}`,
    // });
    // let data = {
    //   "category_id": 1,
    //   "company": "Kaspi.kz",
    //   "content_work": "Нужно разработать магазин использую CMS систему",
    //   "description": "Разработка онлайн магазина",
    //   "experience": "Нужен человек с опытом от 3-х лет",
    //   "location": "Алматы",
    //   "price": 1500000,
    //   "skills": "Django, Nginx, Angular, Uwsgi, Docker",
    //   "subcategory_id": 1,
    //   "user_id": 28,
    // }
    //
    // return this.http.post<any>(this.apiUrl+"/jobs/saveJob", data, {headers});
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`,
    });
    return this.http.get<any[]>(this.apiUrl+"/jobs/allJobs", {headers});
  }

  getJobById(jobId: string): any{
      return this.http.get<any>(this.apiUrl+"/jobs/" + jobId)
  }

  getCategories(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`,
    });

    return this.http.get<any[]>(this.apiUrl+"/jobs/category", {headers});
  }

}
