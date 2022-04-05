import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'identity-auth',
    loadChildren: () =>
      import('./identity-auth/identity-auth.module').then(
        (m) => m.IdentityAuthModule
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'identity-auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
