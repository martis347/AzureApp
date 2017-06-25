import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {GithubModule} from './containers/github/github.module';
import {HomeModule} from './containers/home/home.module';
import {MainModule} from './containers/main/main.module';
import {ServicesModule} from './services/services.module';
import {MDL} from "./misc/MaterialDesignLiteUpgradeElement";
import {CommonModule} from "@angular/common";
import {MdSidenavModule, MdToolbarModule, MdButtonModule, MdListModule} from "@angular/material";
import {LoginGuard} from "./routing/login-guard";
import {AppRoutingModule} from "./routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MDL,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdListModule,
    FormsModule ,
    HttpModule,
    GithubModule,
    HomeModule,
    MainModule,
    ServicesModule,
    AppRoutingModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
