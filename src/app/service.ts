import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class Service {


    private apiUrl = 'http://86.107.44.200:8076'; // Замените на ваш URL сервера API

    constructor(private http: HttpClient) { }


    getUser(): Observable<any> {
      const url = `${this.apiUrl}/api/v1/auth/user` // Замените на нужный URL для вашего сервера API
      return this.http.get<any>(url);
    }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers: headers,
      origin: 'http://localhost:4200', // Specify the exact origin of your Angular app
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      optionsSuccessStatus: 200,
    };

    const body = { username, password };

    return this.http.post(`${this.apiUrl}/api/v1/auth/login`, body, options);
  }
  storeToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Get the token from a variable or local storage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Remove the token
  removeToken(): void {
    localStorage.removeItem('authToken');
  }

  getJobs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+"/jobs");
  }

  getJobById(jobId: string): any{
      return this.http.get<any>(this.apiUrl+"/jobs/" + jobId)
  }

}
