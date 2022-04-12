import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {
  name = 'Douglas';
  time = '4h';
  email = 'douglas@example.com';
  message = 'Contrary to popular belief, Lorem Ipsum is not simply random text.'+
  ' It has roots in a piece of classical Latin literature from 45 BC, '
  +'making it over 2000 years old. Richard McClintock, a Latin professor'+
  ' at Hampden-Sydney College in Virginia, looked up one.';
  constructor() { }

  ngOnInit(): void {
  }

}
