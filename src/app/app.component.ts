import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuServiceService } from '../services/menu-service/menu-service.service';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  loading: boolean = true;
  isTrue: boolean = false;

  menuHidden: boolean = false;
  constructor(private menuService: MenuServiceService, private router: Router, private cdr: ChangeDetectorRef) {
    this.menuService.booleanValue$.subscribe(value => this.menuHidden = value);
    this.loading = true;
  }

  ngOnInit() {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        console.log("Navigation Started");
      } else if (event instanceof NavigationCancel || event instanceof NavigationEnd) {
        this.loading = false;
        console.log("Navigation Ended or Cancelled");
        console.log(this.loading);
      }

      this.cdr.detectChanges()
    })

  }


}
