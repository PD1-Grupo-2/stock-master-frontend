import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { environment } from '../../environments/environment'; // Import the environment

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user = {
    name: 'John Doe',
    avatar: ''
  };
  environment = environment; // Make environment available in the template
  menuOpen = false; // Track the state of the menu
  constructor(private router: Router) {} // Inject Router

  ngOnInit() {
    if (!environment.production) {
      this.user.name = 'John Doe';
    } else {
      const storedName = localStorage.getItem('name');
      if (storedName) {
        this.user.name = storedName;
      }
    }
  }

  getInitials(name: string | null): string {
    if (!name) {
      return '';
    }
    return name.split(' ').map(n => n[0]).join('');
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logoff() {
    localStorage.removeItem('authToken'); // Assuming authToken is used for authentication
    localStorage.removeItem('name'); // Clear the stored name

    // Redirect to login page
    this.router.navigate(['/login']);
  }
}