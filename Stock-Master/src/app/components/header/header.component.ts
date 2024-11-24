import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  user = {
    name: 'John Doe', // Nome fictício para testes
    avatar: '' // Colocar a lógica para pegar o avatar do usuário
  };

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }
}

