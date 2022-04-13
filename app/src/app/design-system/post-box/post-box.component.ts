import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'op-post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.css']
})
export class PostBoxComponent implements OnInit {
  name = 'Douglas';
  post: FormGroup = {} as FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.post = this.fb.group({
      message: ['', [Validators.required, Validators.maxLength(256)]]
    });
  }
  submitPost(){
    console.log(this.post.value);
    this.post.reset();

  }
}
