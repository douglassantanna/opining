import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  title = 'Iniciar sessão';
  signinTitle = 'entrar';
  signupTitle = 'criar conta';

  constructor(private router: Router) {}

  ngOnInit(): void {}
  signup(){
    this.router.navigateByUrl("create-account");
  }
}
