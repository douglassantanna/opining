import { Component, OnInit } from '@angular/core';
import { ViewPost } from '../../interfaces/post';

@Component({
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css'],
})
export class OpinionComponent implements OnInit {
  dataSource: ViewPost[] = [
    {
      id: 1,
      user: {
        id: 1,
        name: 'Douglas',
        email: 'douglas@example.com',
        createdAt: new Date(),
      },
      message:
        'Contrary to popular belief, Lorem Ipsum is not simply random text.' +
        ' It has roots in a piece of classical Latin literature from 45 BC, ' +
        'making it over 2000 years old. Richard McClintock, a Latin professor' +
        ' at Hampden-Sydney College in Virginia, looked up one.',
    },
    {
      id: 2,
      user: {
        id: 2,
        name: 'Davi',
        email: 'davi@example.com',
        createdAt: new Date(),
      },
      message:
        'Contrary to popular belief, Lorem Ipsum is not simply random text.' +
        ' It has roots in a piece of classical Latin literature from 45 BC, ' +
        'making it over 2000 years old. Richard McClintock, a Latin professor' +
        ' at Hampden-Sydney College in Virginia, looked up one.',
    },
    {
      id: 3,
      user: {
        id: 2,
        name: 'João',
        email: 'joao@example.com',
        createdAt: new Date(),
      },
      message:
        'Bitcoin a moedinha da praia is to popular belief, Lorem Ipsum is not simply random text.' +
        ' It has roots in a piece of classical Latin literature from 45 BC, ' +
        'making it over 2000 years old. Richard McClintock, a Latin professor' +
        ' at Hampden-Sydney College in Virginia, looked up one.',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
