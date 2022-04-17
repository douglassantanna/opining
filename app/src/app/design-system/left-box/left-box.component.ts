import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'op-left-box',
  templateUrl: './left-box.component.html',
  styleUrls: ['./left-box.component.css']
})
export class LeftBoxComponent implements OnInit {
  advice =  'Contrary to popular belief, Lorem Ipsum is not simply random text.' +
  'It  has roots in a piece of classical Latin literature from 45 BC.';
  constructor() { }

  ngOnInit(): void {
  }

}
