import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PdfViewerDialogComponent } from '../../../pdf-viewer-dialog/pdf-viewer-dialog.component';

@Component({
  selector: 'app-study-abroad',
  templateUrl: './study-abroad.component.html',
  styleUrls: ['./study-abroad.component.css'],
})
export class StudyAbroadComponent {
  constructor(private dialog: MatDialog) {}

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
