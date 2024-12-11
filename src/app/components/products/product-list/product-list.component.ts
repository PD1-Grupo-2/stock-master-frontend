import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [
    { name: 'Energético Monster Mango Loco', description: 'Lata 350ml', stock: 10, price: 0, image: 'images/products/monster_mango_loco.png' },
  ];
  searchTerm: string = '';
  filteredProducts = this.products;
  loading: boolean = false;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    if (environment.production) {
      this.loading = true;
      this.http.get<{ products: any[] }>('/api/products').subscribe(response => {
        this.products = response.products.map(product => ({
          name: product.name,
          description: product.description,
          stock: product.stockQuantity,
          price: product.salePrice,
          image: product.image || 'images/no-image.png'
        }));
        this.filteredProducts = this.products;
        this.loading = false;
      }, error => {
        console.error('Error fetching products', error);
        this.loading = false;
      });
    } else {
      this.filteredProducts = this.products;
    }
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  navigateToAddProduct() {
    this.router.navigate(['/new-product']);
  }
}