import { NgModule } from '@angular/core';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {GithubComponent} from "./github.component";

@NgModule({
  imports: [],
  declarations: [
    SearchBarComponent,
    GithubComponent
  ],
  providers: [

  ],
  exports: [GithubComponent]
})
export class GithubModule {}
