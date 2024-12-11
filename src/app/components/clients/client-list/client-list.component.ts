import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients = [
    { id: 1, name: 'João Silva', email: 'joao.silva@example.com' },
    { id: 2, name: 'Maria Oliveira', email: 'maria.oliveira@example.com' },
    { id: 3, name: 'Carlos Souza', email: 'carlos.souza@example.com' },
  ];
  searchTerm: string = '';
  filteredClients = this.clients;

  constructor() { }

  ngOnInit(): void {
  }

  filterClients(): void {
    this.filteredClients = this.clients.filter(client =>
      client.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      client.id.toString().includes(this.searchTerm)
    );
  }
}