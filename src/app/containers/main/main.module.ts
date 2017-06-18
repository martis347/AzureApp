import {NgModule} from '@angular/core';
import {MainComponent} from "./main.component";
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule, MdSidenavModule, MdInputModule, MdMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdCardModule,
    MdSidenavModule,
    MdInputModule,
    MdMenuModule,
  ],
  declarations: [
    MainComponent
  ],
  providers: [],
  exports: [
    MainComponent]
})
export class MainModule {
}
