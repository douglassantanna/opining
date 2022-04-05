import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  title = 'Iniciar sessão';
  signinTitle = 'entrar';
  signupTitle = 'criar conta';

  constructor() {}

  ngOnInit(): void {}
  signup(){
    alert('Criar conta')
  }
}
