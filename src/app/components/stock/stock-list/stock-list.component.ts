import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  entradaProducts = [
    { name: 'Cigarro Mentolado L&M', quantity: 100, price: 10.00 },
    { name: 'Bala 7 Belo', quantity: 50, price: 20.00 },
    { name: 'Batata Ruffles', quantity: 2, price: 12.00 },
  ];

  saidaProducts = [
    { id: '8716254', name: 'Batata Pringles', client: 'João da Silva', quantity: 10, price: 100 },
    { id: '8729172', name: 'Cobertura de Chocolate Nestlé', client: 'Armazém Medianeira', quantity: 5, price: 200 },
    { id: '8719286', name: 'Chaleira elétrica Cadence', client: 'Maria Silva', quantity: 2, price: 300 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}