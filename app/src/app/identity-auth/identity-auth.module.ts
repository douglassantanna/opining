import { DesignSystemModule } from './../design-system/design-system.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityAuthRoutingModule } from './identity-auth-routing.module';
import { SigninComponent } from './authorization/page/signin/signin.component';
import { CreateAccountComponent } from './authorization/page/create-account/create-account.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SigninComponent, CreateAccountComponent],
  imports: [
    CommonModule,
    IdentityAuthRoutingModule,
    DesignSystemModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
})
export class IdentityAuthModule {}
