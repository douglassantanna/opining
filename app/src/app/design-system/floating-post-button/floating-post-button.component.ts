import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { RawPostBoxComponent } from '../raw-post-box/raw-post-box.component';

@Component({
  selector: 'op-floating-post-button',
  templateUrl: './floating-post-button.component.html',
  styleUrls: ['./floating-post-button.component.css']
})
export class FloatingPostButtonComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(RawPostBoxComponent, {
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
