import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { DesignSystemModule } from '../design-system/design-system.module';
import { OpinionComponent } from './page/opinion/opinion.component';


@NgModule({
  declarations: [
    OpinionComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    DesignSystemModule,
  ]
})
export class PostsModule { }
