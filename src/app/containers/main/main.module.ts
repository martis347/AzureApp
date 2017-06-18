import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {MdButtonModule, MdToolbarModule, MdSidenavModule, MdListModule, MdMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SidenavComponent} from './sidenav/sidenav.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {ContentModule} from './content/content.module';
import {CommonModule} from "@angular/common";
import {MenuItemsComponent} from "./sidenav/menu-items/menu-items.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    ContentModule,
    MdListModule,
    MdMenuModule
  ],
  declarations: [
    MainComponent,
    SidenavComponent,
    ToolbarComponent,
    MenuItemsComponent
  ],
  providers: [],
  exports: [
    MainComponent
  ]
})
export class MainModule {
}
