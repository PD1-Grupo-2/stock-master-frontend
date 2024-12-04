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
    { name: 'Produto 1', quantity: 10, price: 100 },
    { name: 'Produto 2', quantity: 5, price: 200 },
    { name: 'Produto 3', quantity: 2, price: 300 }
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
    this.filteredOrders = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    )
  }

  navigateToAddOrder() {
    this.router.navigate(['/new-sell-order']);
  }
}