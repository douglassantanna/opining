import { IdentityAuthModule } from './identity-auth/identity-auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesignSystemModule } from './design-system/design-system.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DesignSystemModule,
    IdentityAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
