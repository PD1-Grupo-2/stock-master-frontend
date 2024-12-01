import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.css']
})
export class BottomNavbarComponent implements OnInit {
  selectedTab: string = 'home';

  constructor(private router: Router) {}

  ngOnInit() {
    // Update selected tab based on the current route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateSelectedTab(event.urlAfterRedirects);
    });

    // Initialize selected tab based on the initial route
    this.updateSelectedTab(this.router.url);
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.router.navigate([`/${tab}`]);
  }

  private updateSelectedTab(url: string) {
    if (url.includes('home')) {
      this.selectedTab = 'home';
    } else if (url.includes('search')) {
      this.selectedTab = 'search';
    } else if (url.includes('notifications')) {
      this.selectedTab = 'notifications';
    } else if (url.includes('profile')) {
      this.selectedTab = 'profile';
    } else if (url.includes('order-list')) {
      this.selectedTab = 'order-list';
    }
  }
}