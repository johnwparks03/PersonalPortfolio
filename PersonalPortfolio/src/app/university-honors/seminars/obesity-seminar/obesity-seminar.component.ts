import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PdfViewerDialogComponent } from '../../../pdf-viewer-dialog/pdf-viewer-dialog.component';

@Component({
  selector: 'app-obesity-seminar',
  templateUrl: './obesity-seminar.component.html',
  styleUrls: ['./obesity-seminar.component.css'],
})
export class ObesitySeminarComponent {
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
