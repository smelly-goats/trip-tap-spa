import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from '@Auth/components/sign-in/sign-in.component';
import { AuthRoutes } from '@Enums/routes.enum';

import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: AuthRoutes.SignIn,
    component: SignInComponent,
  },
  {
    path: AuthRoutes.SignUp,
    component: SignUpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
