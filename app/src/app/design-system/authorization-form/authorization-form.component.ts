import { Router } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'op-authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.css']
})
export class AuthorizationFormComponent implements OnInit {
  @Input() title = '';
  @Input() signinTitle = '';
  @Input() signupTitle = '';
  @Input() signupButton = false;
  @Input() forgotPassword = false;

  loginForm: FormGroup = {} as FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    this.router.navigateByUrl('posts');
    console.log(this.loginForm.value);
  }
  signup(){
    console.log('um email foi enviado para', this.loginForm.value.email);
  }
  get email() { return this.loginForm.get('email') as FormControl; }

  get password() { return this.loginForm.get('password') as FormControl; }

}
