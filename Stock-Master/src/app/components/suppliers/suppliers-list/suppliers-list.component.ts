import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.css']
})
export class SuppliersListComponent implements OnInit {
  suppliers: any[] = [];
  filteredSuppliers: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadSuppliers();
  }

  loadSuppliers(): void {
    if (environment.production) {
      this.http.get<{ suppliers: any[] }>('/api/suppliers').subscribe(
        response => {
          this.suppliers = response.suppliers;
          this.filteredSuppliers = response.suppliers;
        },
        error => {
          console.error('Error loading suppliers', error);
        }
      );
    } else {
      // Mock data for non-production environment
      this.suppliers = [
        {
          id: 1,
          name: 'Tech Supplies Ltda',
          contact: 'João Silva',
          address: 'Rua das Flores, 123, São Paulo - SP',
          cnpj: '12.345.678/0001-90',
          phone: '(11) 91234-5678',
          email: 'joao@techsupplies.com'
        },
        {
          id: 2,
          name: 'Books & Co.',
          contact: 'Maria Souza',
          address: 'Avenida Brasil, 456, Rio de Janeiro - RJ',
          cnpj: '98.765.432/0001-10',
          phone: '(21) 99876-5432',
          email: 'maria@booksandco.com'
        },
        {
          id: 3,
          name: 'Fashion Hub',
          contact: 'Pedro Oliveira',
          address: 'Praça Central, 789, Belo Horizonte - MG',
          cnpj: '55.123.456/0001-22',
          phone: '(31) 93210-9876',
          email: 'pedro@fashionhub.com'
        }
      ];
      this.filteredSuppliers = this.suppliers;
    }
  }

  filterSuppliers(): void {
    this.filteredSuppliers = this.suppliers.filter(supplier =>
      supplier.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      supplier.phone.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      supplier.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}