import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {MdButtonModule, MdListModule, MdMenuModule, MdToolbarModule, MdSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContentModule} from './content/content.module';
import {CommonModule} from "@angular/common";
import {MenuItemsComponent} from "./navigation/sidenav/menu-items/menu-items.component";
import {ToolbarComponent} from "./navigation/toolbar/toolbar.component";
import {SidenavComponent} from "./navigation/sidenav/sidenav.component";
import {MainContentRoutingModule} from "./routing/main-content-routing.module";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MdButtonModule,
    ContentModule,
    MdListModule,
    MdMenuModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdListModule,
    MainContentRoutingModule
  ],
  declarations: [
    MainComponent,
    SidenavComponent,
    ToolbarComponent,
    MenuItemsComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule {
}
