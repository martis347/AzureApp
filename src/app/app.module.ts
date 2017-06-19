import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {MainComponent} from './containers/main/main.component';
import {GithubComponent} from './containers/github/github.component';
import {SidenavComponent} from './navigation/sidenav/sidenav.component';
import {ToolbarComponent} from './navigation/toolbar/toolbar.component';
import {GithubModule} from './containers/github/github.module';
import {HomeModule} from './containers/home/home.module';
import {MainModule} from './containers/main/main.module';
import {ServicesModule} from './services/services.module';
import {MDL} from "./MaterialDesignLiteUpgradeElement";
import {CommonModule} from "@angular/common";
import {MdSidenavModule, MdToolbarModule, MdButtonModule, MdListModule} from "@angular/material";
import {MenuItemsComponent} from "./navigation/sidenav/menu-items/menu-items.component";
import {StepperComponent} from "./containers/main/content/setup/stepper/stepper.component";
import {MainGuard} from "./main-guard";
import {LoginGuard} from "./login-guard";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    MenuItemsComponent,
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
    RouterModule.forRoot([
      { path: 'setup', component: StepperComponent, canActivate: [LoginGuard] },
      { path: '', component: MainComponent, canActivate: [MainGuard]},
      { path: 'github', component: GithubComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]),
  ],
  providers: [MainGuard, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
