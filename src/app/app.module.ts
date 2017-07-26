import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {GithubModule} from './containers/github/github.module';
import {HomeModule} from './containers/home/home.module';
import {MainModule} from './containers/main/main.module';
import {ServicesModule} from './services/services.module';
import {MDL} from "./misc/MaterialDesignLiteUpgradeElement";
import {AppRoutingModule} from "./routing/app-routing.module";
import {ExtendedHttpService} from "./services/extended-http.service";
import {Http, HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {SignInComponent} from "./containers/main/setup/sign-in/sign-in.component";

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
    AppRoutingModule,
    HttpModule,
    CommonModule,
    BrowserModule
  ],
  providers: [
    {provide: Http, useClass: ExtendedHttpService}
  ],
  bootstrap: [AppComponent],

})
export class AppModule {
}
