import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  products = [
    { id: '8716254', name: 'Batata Pringles', client: 'João da Silva', quantity: 10, price: 100 },
    { id: '8729172', name: 'Cobertura de Chocolate Nestlé', client: 'Armazém Medianeira', quantity: 5, price: 200 },
    { id: '8719286', name: 'Chaleira elétrica Cadence', client: 'Maria Silva', quantity: 2, price: 300 }
  ];

  filteredOrders = this.products;
  searchTerm: string = '';
  constructor(private router: Router) { }


  displayedColumns: string[] = ['name', 'quantity', 'price', 'total'];
  dataSource = new MatTableDataSource(this.products);

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.products);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterOrders(): void {
    const searchTermLower = this.searchTerm.toLowerCase();
    this.filteredOrders = this.products.filter(product =>
      product.name.toLowerCase().includes(searchTermLower) ||
      product.client.toLowerCase().includes(searchTermLower) ||
      product.id.toString().includes(searchTermLower)
    );
  }

  navigateToAddOrder() {
    this.router.navigate(['/new-sell-order']);
  }
}