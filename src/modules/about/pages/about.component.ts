import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent implements AfterViewInit {
  @ViewChild('firstService') firstService!: ElementRef;
  @ViewChild('secondService') secondService!: ElementRef;
  @ViewChild('thirdService') thirdService!: ElementRef;

  isVisible: boolean = false;

  private observer!: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && 'IntersectionObserver' in window) {
      this.initObserver();
    }
  }

  initObserver() {
    const options = {
      root: null, // Use the viewport
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    this.observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          this.observer.unobserve(this.firstService.nativeElement);
          this.observer.unobserve(this.secondService.nativeElement);
          this.observer.unobserve(this.thirdService.nativeElement);
        }
      });
    }, options)

    this.observer.observe(this.firstService.nativeElement);
    this.observer.observe(this.secondService.nativeElement);
    this.observer.observe(this.thirdService.nativeElement);
  }
}
