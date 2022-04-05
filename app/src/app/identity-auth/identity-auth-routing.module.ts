import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './authorization/page/create-account/create-account.component';
import { SigninComponent } from './authorization/page/signin/signin.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'create-account', component: CreateAccountComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentityAuthRoutingModule { }
