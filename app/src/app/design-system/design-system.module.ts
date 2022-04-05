import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationFormComponent } from './authorization-form/authorization-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AuthorizationFormComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [AuthorizationFormComponent]
})
export class DesignSystemModule { }
