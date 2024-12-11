import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { map, catchError } from 'rxjs/operators'; 
  

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000/api/users';  
  constructor(private http: HttpClient) { }

  
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user)
      .pipe(
        map(response => response),
        catchError(err => {
          console.error('Erro ao registrar usuário', err);
          throw err;
        })
      );
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials)
      .pipe(
        map(response => response),
        catchError(err => {
          console.error('Erro no login', err);
          throw err;
        })
      );
  }

 


  updateProfile(user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users`, user)
      .pipe(
        map(response => response),
        catchError(err => {
          console.error('Erro ao atualizar o perfil do usuário', err);
          throw err;
        })
      );
  }

 
  changePassword(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/change-password`, data)
      .pipe(
        map(response => response),
        catchError(err => {
          console.error('Erro ao alterar a senha', err);
          throw err;
        })
      );
  }

  
  deleteProfile(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users`)
      .pipe(
        map(response => response),
        catchError(err => {
          console.error('Erro ao deletar o perfil', err);
          throw err;
        })
      );
  }
}
