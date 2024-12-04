import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = "http://localhost:4200/api/auth/login";

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const payload = { email, password };
    console.log('Request payload:', payload); // Log the request payload
    return this.http.post(this.loginUrl, payload, { headers }).pipe(
      tap(
        response => console.log('Response received:', response), // Log the response
        error => console.error('Error received:', error) // Log the error
      )
    );
  }
}