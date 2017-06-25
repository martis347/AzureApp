import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContentModule} from './content/content.module';
import {CommonModule} from "@angular/common";
import {MenuItemsComponent} from "./navigation/sidenav/menu-items/menu-items.component";
import {ToolbarComponent} from "./navigation/toolbar/toolbar.component";
import {SidenavComponent} from "./navigation/sidenav/sidenav.component";
import {MainContentRoutingModule} from "./routing/main-content-routing.module";
import {StepperComponent} from "./setup/stepper/stepper.component";
import {MDModule} from "../../misc/material-design.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SetupComponent} from "./setup/setup.component";
import {WeekChangingModal} from "./modals/week-changing/week-changing.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ContentModule,
    MDModule,
    MainContentRoutingModule
  ],
  declarations: [
    MainComponent,
    SidenavComponent,
    ToolbarComponent,
    MenuItemsComponent,
    StepperComponent,
    SetupComponent,
    WeekChangingModal

  ],
  exports: [
    MainComponent
  ],
  entryComponents: [WeekChangingModal]
})
export class MainModule {
}
