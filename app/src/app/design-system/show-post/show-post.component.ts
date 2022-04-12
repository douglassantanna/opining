import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'op-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css'],
})
export class ShowPostComponent implements OnInit {
  @Input() time = '';
  @Input() name = '';
  @Input() email = '';
  @Input() message ='';

  constructor() {}

  ngOnInit(): void {}
}
