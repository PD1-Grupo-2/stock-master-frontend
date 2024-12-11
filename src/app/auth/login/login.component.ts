import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'; // Import the environment

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  hideHeaderAndNavbar: boolean = true;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    this.isLoading = true;

    if (!environment.production) {
      setTimeout(() => {
        localStorage.setItem('token', 'dev-token');
        localStorage.setItem('name', 'John Doe');
        this.router.navigate(['/home']);
        this.isLoading = false;
      }, 1000);
    } else {
      this.authService.login(this.email, this.password).subscribe(
        (response: any) => {
          if (response && response.token && response.name) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('name', response.name);
            this.router.navigate(['/home']);
          } else if (response && response.status === 401) {
            this.errorMessage = 'Acesso não autorizado. Favor revise suas credenciais.';
          } else {
            this.errorMessage = response.message || 'O servidor retornou um erro. Favor tente novamente.';
          }
          this.isLoading = false;
        },
        error => {
          console.error('Login failed', error);
          if (error.status === 401) {
            this.errorMessage = 'Acesso não autorizado. Favor revise suas credenciais.';
          } else {
            this.errorMessage = error.error?.message || 'O login falhou. Favor tente novamente.';
          }
          this.isLoading = false;
        }
      );
    }
  }
  onForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }

  loginWithGoogle() {
  }

  loginWithFacebook() {
  }

  loginWithApple() {
  }
}