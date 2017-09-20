import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContentModule} from './content/content.module';
import {CommonModule} from '@angular/common';
import {MenuItemsComponent} from './navigation/sidenav/menu-items/menu-items.component';
import {ToolbarComponent} from './navigation/toolbar/toolbar.component';
import {SidenavComponent} from './navigation/sidenav/sidenav.component';
import {StepperComponent} from './setup/stepper/stepper.component';
import {MDModule} from '../../misc/material-design.module';
import {SetupComponent} from './setup/setup.component';
import {WeekChangingModal} from './modals/week-changing/week-changing.component';
import {StepperContentComponent} from './setup/stepper/stepper-content.component';
import {FeedbackComponent} from './modals/feedback/feedback.component';
import {SignInComponent} from './setup/sign-in/sign-in.component';
import {NameChangingComponent} from './modals/name-changing/name-changing.component';
import {RouterModule} from '@angular/router';
import { DayChangingComponent } from './modals/day-changing/day-changing.component';
import { LunchEditingComponent } from './lunch-editing/lunch-editing.component';
import { ProviderTabComponent } from './lunch-editing/provider-tab/provider-tab.component';
import {FormsModule} from '@angular/forms';
import { CategoryComponent } from './lunch-editing/provider-tab/category/category.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    ContentModule,
    RouterModule,
    MDModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    SidenavComponent,
    ToolbarComponent,
    MenuItemsComponent,
    StepperComponent,
    StepperContentComponent,
    SetupComponent,
    WeekChangingModal,
    FeedbackComponent,
    NameChangingComponent,
    DayChangingComponent,
    SignInComponent,
    LunchEditingComponent,
    ProviderTabComponent,
    CategoryComponent
  ],
  exports: [
    MainComponent,
    SidenavComponent,
    ToolbarComponent,
    MenuItemsComponent
  ],
  entryComponents: [WeekChangingModal, FeedbackComponent, NameChangingComponent, DayChangingComponent]
})
export class MainModule {
}
