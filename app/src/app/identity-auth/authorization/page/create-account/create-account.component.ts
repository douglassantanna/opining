import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  title = 'Mantenha-se conectado com o mundo. Registra-se agora mesmo!';
  signinTitle = 'entrar';
  signupTitle = 'criar conta';

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
