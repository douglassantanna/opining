import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'op-post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.css']
})
export class PostBoxComponent implements OnInit {
  name = "Douglas";
  constructor() { }

  ngOnInit(): void {
  }

}
