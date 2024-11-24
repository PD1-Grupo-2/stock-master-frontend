import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  notifications = [
    { title: 'Produtos com baixo estoque', message: '15 produtos estão com baixo estoque.', type: 'warning' },
  ];
}