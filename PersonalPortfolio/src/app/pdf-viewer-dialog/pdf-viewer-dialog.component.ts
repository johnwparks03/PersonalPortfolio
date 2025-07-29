import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-pdf-viewer-dialog',
  templateUrl: './pdf-viewer-dialog.component.html',
  styleUrls: ['./pdf-viewer-dialog.component.css'],
})
export class PdfViewerDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PdfViewerDialogComponent>,
    @Inject(DOCUMENT) private document: Document,
    @Inject(MAT_DIALOG_DATA) public data: { url: string }
  ) {
    const test = this.document.getElementsByTagName('base')[0].href;
    const segments = test.split('/').filter(Boolean); // removes empty strings
    const lastSegment = segments[segments.length - 1];
    console.log('Last segment:', lastSegment);
    console.log('Base HREF:', test);

    // data.url = lastSegment ? lastSegment + '/' + data.url : data.url;
  }

  close(): void {
    this.dialogRef.close();
  }
}
