import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MDL} from './misc/MaterialDesignLiteUpgradeElement';
import {ExtendedHttpService} from './services/extended-http.service';
import {Http, HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import { PrivacyPolicyComponent } from './containers/privacy/privacy-policy/privacy-policy.component';
import {MDModule} from './misc/material-design.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContentModule} from './containers/main/content/content.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MainModule} from "./containers/main/main.module";
import {ServicesModule} from "./services/services.module";
import {AppRoutingModule} from "./routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MDL,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ContentModule,
    RouterModule,
    MDModule,
    FormsModule,
    MainModule,
    ServicesModule,
    RouterModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    {provide: Http, useClass: ExtendedHttpService}
  ],
  bootstrap: [AppComponent],

})
export class AppModule {
}
