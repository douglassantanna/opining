import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { AuthorizationFormComponent } from './authorization-form/authorization-form.component';
import { HeaderComponent } from './header/header.component';
import { LeftBoxComponent } from './left-box/left-box.component';
import { PostBoxComponent } from './post-box/post-box.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { RawPostBoxComponent } from './raw-post-box/raw-post-box.component';

@NgModule({
  declarations: [
    AuthorizationFormComponent,
    HeaderComponent,
    PostBoxComponent,
    ShowPostComponent,
    LeftBoxComponent,
    RawPostBoxComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  exports: [
    AuthorizationFormComponent,
    HeaderComponent,
    PostBoxComponent,
    ShowPostComponent,
    LeftBoxComponent,
    RawPostBoxComponent
  ],
})
export class DesignSystemModule {}
