import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent {
  product = {
    name: '',
    description: '',
    barcode: ''
  };
  message: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:4200/api/products', this.product)
      .subscribe(
        response => {
          this.message = 'Produto adicionado com sucesso!';
          this.product = { name: '', description: '', barcode: '' }; // Reset form
        },
        error => {
          console.error('Erro ao adicionar produto', error);
          this.message = 'Erro ao adicionar produto. Tente novamente.';
        }
      );
  }
}