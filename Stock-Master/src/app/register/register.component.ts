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
    confirmPassword: string = ''

};

constructor(private userService: UserService) {}

onRegister() {
  if(this.user.password != this.user.confirmPassword) {
    console.error('Senhas não coincidem');
    return;
  }
};

  this.userService.register(this.user).subscribe({
    next: (response:any) => {
      console.log('Usuário cadastrado com sucesso', response);
    },
    error: (err : any) => {
      console.error('Erro ao cadastrar usuário', err);
    }
  })
}