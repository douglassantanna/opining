import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'op-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name = 'Douglas';
  constructor() { }

  ngOnInit(): void {
  }

}
