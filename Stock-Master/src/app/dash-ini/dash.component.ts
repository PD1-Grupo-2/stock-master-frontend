import { Component } from '@angular/core';

interface StockItem {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class AppComponent {
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
  items: StockItem[] = Array(10).fill({ name: 'Preciso saber dos nomes', quantity: 0 });

  increaseQuantity(item: StockItem): void {
    item.quantity += 1;
  }

  decreaseQuantity(item: StockItem): void {
    if (item.quantity > 0) {
      item.quantity -= 1;
    }
  }

  updateStock(): void {
    console.log("Stock updated:", this.items);
    // Lógica para atualização real do estoque (ex: chamada de API)
  }
}