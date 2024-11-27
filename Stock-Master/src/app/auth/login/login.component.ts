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
  errorMessage: string = '';
  isLoginPage: boolean = true;

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login feito', response);
        //ajustar para a rota correta 
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.errorMessage = 'Login inválido: ' + (err.message ? err.message : '');
      }
    });
  }

  onForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
  redirectToHome() {
    this.router.navigate(['/home']);
    console.log('Home');
  }
  loginWithGoogle() {
  }

  loginWithFacebook() {
  }

  loginWithApple() {
  }
}

