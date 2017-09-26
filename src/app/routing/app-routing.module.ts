import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SetupGuard} from './setup-guard';
import {MainGuard} from './main-guard';
import {SetupComponent} from '../containers/main/setup/setup.component';
import {WeekdayGuard} from './weekday-guard';
import {MainComponent} from '../containers/main/main.component';
import {SignInComponent} from '../containers/main/setup/sign-in/sign-in.component';
import {LoginGuard} from './login-guard';
import {PrivacyPolicyComponent} from '../containers/privacy/privacy-policy/privacy-policy.component';
import {LunchEditingComponent} from "../containers/main/lunch-editing/lunch-editing.component";

const appRoutes: Routes = [
  {path: 'login', component: SignInComponent, canActivate: [LoginGuard]},
  {path: 'setup', component: SetupComponent, canActivate: [SetupGuard]},
  {path: 'edit/:day', component: LunchEditingComponent, pathMatch: 'full'},
  {path: 'lunch/:date', component: MainComponent, canActivate: [WeekdayGuard, MainGuard]},
  {path: 'lunch', component: MainComponent, canActivate: [WeekdayGuard, MainGuard]},
  {path: 'lunch/**', redirectTo: 'lunch/', pathMatch: 'full'},
  {path: 'privacy-policy', component: PrivacyPolicyComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'lunch/', pathMatch: 'full'},
  {path: '**', redirectTo: 'lunch/', pathMatch: 'full'}
];
@NgModule( {
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MainGuard, WeekdayGuard, SetupGuard, LoginGuard
  ]
})
export class AppRoutingModule {
}
