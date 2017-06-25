import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {StepperComponent} from "../containers/main/content/setup/stepper/stepper.component";
import {LoginGuard} from "./login-guard";
import {GithubComponent} from "../containers/github/github.component";
import {MainGuard} from "../containers/main/routing/main-guard";
import {Utilities} from "../misc/utilities";

const appRoutes: Routes = [
  { path: 'setup', component: StepperComponent, canActivate: [LoginGuard] },
  { path: '', canActivate: [MainGuard], children: [
    { path: 'github', component: GithubComponent },
    { path: '**', redirectTo: '/lunch/' + Utilities.GetTodaysDate(), pathMatch: 'full' }
  ]},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
