import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {MainComponent} from "../main.component";
import {WeekdayGuard} from "./weekday-guard";
import {MainGuard} from "./main-guard";
import {Utilities} from "../../../misc/utilities";

const mainComponentRoutes: Routes = [
  {path: 'lunch/:date', component: MainComponent, canActivate: [WeekdayGuard, MainGuard]},
  {path: 'lunch/**', redirectTo: 'lunch/' + Utilities.GetTodaysDate(), pathMatch: 'full'},
  {path: 'lunch', redirectTo: 'lunch/' + Utilities.GetTodaysDate(), pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forChild(mainComponentRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MainGuard, WeekdayGuard
  ]
})
export class MainContentRoutingModule {
}
