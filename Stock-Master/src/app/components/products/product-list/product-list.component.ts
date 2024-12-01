import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [
    { name: 'Energético Monster Mango Loco', description: 'Lata 350ml', stock: 10, image: 'images/products/monster_mango_loco.png' },

  ];
  searchTerm: string = '';
  filteredProducts = this.products;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  navigateToAddProduct() {
    this.router.navigate(['/new-sell-order']);
  }
}