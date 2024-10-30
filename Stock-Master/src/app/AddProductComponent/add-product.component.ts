import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productName: string = '';
  productQuantity: number = 1;

  addProduct(): void {
    console.log('Produto Adicionado:', {
      nome: this.productName,
      quantidade: this.productQuantity
    });
    
    // Limpa os campos após a adição
    this.productName = '';
    this.productQuantity = 1;

    // Lógica adicional pode ser implementada aqui (exemplo: chamada de API)
  }
}