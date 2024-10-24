import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl =  "http://localhost:5000/api/auth/login";
  
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const body = {email: email, password: password};

    return this.http.post<any>(this.apiUrl, body, {headers}).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error:any): Observable<never>{
    console.error('Ocorreu um erro durante o login. Por favor, tente novamente.', error);
    throw error;
  }
}
