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

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateSelectedTab(event.urlAfterRedirects);
    });

    this.updateSelectedTab(this.router.url);
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.router.navigate([`/${tab}`]);
  }

  private updateSelectedTab(url: string) {
    if (url.includes('home')) {
      this.selectedTab = 'home';
    } else if (url.includes('supplier-list')) {
      this.selectedTab = 'supplier-list';

    } else if (url.includes('order-list')) {
      this.selectedTab = 'order-list';

    } else if (url.includes('help')) {
      this.selectedTab = 'help';
    }
  }
}