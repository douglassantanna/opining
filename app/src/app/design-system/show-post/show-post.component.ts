import { ViewPost } from './../../posts/interfaces/post';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'op-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css'],
})
export class ShowPostComponent implements OnInit {
  @Input() viewPost!: ViewPost

  constructor() {}

  ngOnInit(): void {}
}
