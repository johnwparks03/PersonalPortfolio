import {
  Component,
  AfterViewInit,
  Renderer2,
  ElementRef,
  HostListener,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PdfViewerDialogComponent } from '../pdf-viewer-dialog/pdf-viewer-dialog.component';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements AfterViewInit {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private dialog: MatDialog
  ) {}

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
  pdfUrl: string | null = null;

  openPDF(path: string) {
    this.dialog.open(PdfViewerDialogComponent, {
      data: { url: path },
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      panelClass: 'fullscreen-dialog',
    });
  }
}
