import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {MdButtonModule, MdToolbarModule, MdSidenavModule, MdListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidenavComponent} from './sidenav/sidenav.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ContentModule} from './content/content.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    ContentModule,
    MdListModule
  ],
  declarations: [
    MainComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  providers: [],
  exports: [
    MainComponent
  ]
})
export class MainModule {
}
