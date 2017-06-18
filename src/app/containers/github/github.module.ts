import { NgModule } from '@angular/core';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {GithubComponent} from './github.component';
import {FormsModule} from '@angular/forms';
import {GithubUserTableComponent} from './github-user-table/github-user-table.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule],
  declarations: [
    SearchBarComponent,
    GithubComponent,
    GithubUserTableComponent
  ],
  providers: [

  ],
  exports: [GithubComponent]
})
export class GithubModule {}
