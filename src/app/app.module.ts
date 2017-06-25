import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {GithubModule} from './containers/github/github.module';
import {HomeModule} from './containers/home/home.module';
import {MainModule} from './containers/main/main.module';
import {ServicesModule} from './services/services.module';
import {MDL} from "./misc/MaterialDesignLiteUpgradeElement";
import {LoginGuard} from "./routing/login-guard";
import {AppRoutingModule} from "./routing/app-routing.module";
import {WeekChangingModal} from "./containers/main/modals/week-changing/week-changing.component";

@NgModule({
  declarations: [
    AppComponent,
    MDL,

  ],
  imports: [
    GithubModule,
    HomeModule,
    MainModule,
    ServicesModule,
    AppRoutingModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent],

})
export class AppModule {
}
