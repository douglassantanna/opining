import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'op-raw-post-box',
  templateUrl: './raw-post-box.component.html',
  styleUrls: ['./raw-post-box.component.css']
})
export class RawPostBoxComponent implements OnInit {
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
