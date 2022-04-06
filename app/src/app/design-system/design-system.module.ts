import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationFormComponent } from './authorization-form/authorization-form.component';
import { HeaderComponent } from './header/header.component';

import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PostBoxComponent } from './post-box/post-box.component';

@NgModule({
  declarations: [AuthorizationFormComponent, HeaderComponent, PostBoxComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [AuthorizationFormComponent, HeaderComponent, PostBoxComponent],
})
export class DesignSystemModule {}
