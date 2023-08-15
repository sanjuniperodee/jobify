import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class UserService {


    private apiUrl = 'http://172.20.10.5:81'; // Замените на ваш URL сервера API
  
    constructor(private http: HttpClient) { }
  

    getUser(): Observable<any> {
      const url = `${this.apiUrl}/user` // Замените на нужный URL для вашего сервера API
      return this.http.get<any>(url);
    }

    login(body:any): Observable<any> {
      const headers = new HttpHeaders({'Content-Type': 'application/json'})
      const url = `${this.apiUrl}/login` 
      return this.http.post<any>(url, body, {headers})
    }
  }