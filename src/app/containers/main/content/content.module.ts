import {NgModule} from '@angular/core';
import {ContentComponent} from './content.component';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {ItemsListComponent} from "./items-list/items-list.component";
import {SelectedChipsComponent} from "./selected-chips/selected-chips.component";
import {MDModule} from "../../../misc/material-design.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MDModule
  ],
  declarations: [
    ContentComponent,
    ItemsListComponent,
    SelectedChipsComponent
  ],
  providers: [],
  exports: [
    ContentComponent
  ]
})
export class ContentModule {
}
