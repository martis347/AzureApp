import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HomeComponent} from './containers/home/home.component';
import {MainComponent} from './containers/main/main.component';
import {GithubComponent} from './containers/github/github.component';
import {NavigationComponent} from './navigation/navigation.component';
import {GithubModule} from './containers/github/github.module';
import {HomeModule} from './containers/home/home.module';
import {MainModule} from './containers/main/main.module';
import {ServicesModule} from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    GithubModule,
    HomeModule,
    MainModule,
    ServicesModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: 'main', component: MainComponent },
      { path: 'github', component: GithubComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
