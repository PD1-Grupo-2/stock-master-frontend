import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment'; // Import the environment

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  notifications = [
    { title: 'Estoque baixo', message: 'Cerveja Spaten 350 ml está com estoque baixo.', type: 'warning' },
    { title: 'Estoque baixo', message: 'Batata Pringles lata está com estoque baixo.', type: 'warning' },
  ];

  constructor() {}

  ngOnInit() {
    if (!environment.production) {
      this.notifications = [
        { title: 'Produtos com baixo estoque', message: '15 produtos estão com baixo estoque.', type: 'warning' },
        { title: 'Existem pedidos pendentes', message: '2 pedidos ainda estão pendentes.', type: 'warning' },


      ];
    }
  }

  haveLowStockNumber(): boolean {
    return this.notifications.length > 0;
  }
}