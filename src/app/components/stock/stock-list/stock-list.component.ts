import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  entradaProducts = [
    { name: 'Produto 1', quantity: 100, price: 10.00 },
    { name: 'Produto 2', quantity: 50, price: 20.00 },
    { name: 'Produto 3', quantity: 200, price: 5.00 },
  ];

  saidaProducts = [
    { name: 'Produto 4', quantity: 30, price: 15.00 },
    { name: 'Produto 5', quantity: 20, price: 25.00 },
    { name: 'Produto 6', quantity: 10, price: 30.00 },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}