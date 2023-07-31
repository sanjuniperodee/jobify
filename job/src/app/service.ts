import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class UserService {

    private apiUrl = 'http://192.168.0.10:8000'; // Замените на ваш URL сервера API
  
    constructor(private http: HttpClient) { }
  

    getUser(): Observable<any> {
      const url = `${this.apiUrl}/user` // Замените на нужный URL для вашего сервера API
      return this.http.get<any>(url);

    }
  }