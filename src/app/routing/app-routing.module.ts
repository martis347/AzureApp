import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LoginGuard} from "./login-guard";
import {MainGuard} from "./main-guard";
import {SetupComponent} from "../containers/main/setup/setup.component";
import {WeekdayGuard} from "./weekday-guard";
import {MainComponent} from "../containers/main/main.component";

const appRoutes: Routes = [
  {path: 'setup', component: SetupComponent, canActivate: [LoginGuard]},
  {path: 'lunch/:date', component: MainComponent, canActivate: [WeekdayGuard, MainGuard]},
  {path: 'lunch', component: MainComponent, canActivate: [WeekdayGuard, MainGuard]},
  {path: 'lunch/**', redirectTo: 'lunch/', pathMatch: 'full'},
  {path: '', redirectTo: 'lunch/', pathMatch: 'full'},
  {path: '**', redirectTo: 'lunch/', pathMatch: 'full'}
];
appRoutes[2].redirectTo = 'lunch/';
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MainGuard, WeekdayGuard, LoginGuard
  ]
})
export class AppRoutingModule {
}
