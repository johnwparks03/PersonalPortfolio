import {
  Component,
  AfterViewInit,
  Renderer2,
  ElementRef,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements AfterViewInit{
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const items = this.el.nativeElement.querySelectorAll('.timeline-item');
    let minDiff = Infinity;
    let activeItem: HTMLElement | null = null;
    const centerOfScreen = window.innerHeight / 2;

    items.forEach((item: HTMLElement) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;
      const diff = Math.abs(itemCenter - centerOfScreen);
      if (diff < minDiff) {
        minDiff = diff;
        activeItem = item;
      }
      this.renderer.removeClass(item, 'active');
    });

    if (activeItem) {
      this.renderer.addClass(activeItem, 'active');
      console.log(activeItem);
    }
  }
}
