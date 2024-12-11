import { UserService } from '../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  isLoginPage: boolean = true;


  constructor(private userService: UserService) {}

  onRegister() {
    if (this.password !== this.confirmPassword) {
      console.error('Senhas não coincidem');
      return;
    }

    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.userService.register(user).subscribe({
      next: (response: any) => {
        console.log('Usuário cadastrado com sucesso', response);
      },
      error: (err: any) => {
        console.error('Erro ao cadastrar usuário', err);
      }
    });
  }
}