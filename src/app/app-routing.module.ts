import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddApplicationDetailsComponent } from './add-application-details/add-application-details.component';
import { AccountsComponent } from './modules/pages/accounts/accounts.component';

import { CreateAccountDetailsComponent } from './modules/pages/create-account-details/create-account-details.component';
import { CreateAccountThemeComponent } from './modules/pages/create-account-theme/create-account-theme.component';
import { CreateAccountComponent } from './modules/pages/create-account/create-account.component';


const routes: Routes = [
  {path:"", component: AccountsComponent},

  {path:"accounts", component: AccountsComponent},  //CreateAccountComponent
  {path:"create-accounts", component: CreateAccountComponent},  //CreateAccountDetailsComponent
  {path:"create-accounts-details", component: CreateAccountDetailsComponent}, //CreateAccountThemeComponent
  {path:"create-accounts-theme", component: CreateAccountThemeComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
