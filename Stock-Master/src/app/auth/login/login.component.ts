import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) =>{

        //ajustar para a rota correta 
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log('Erro ao efetuar login', err);
      }
    });
  }
}
