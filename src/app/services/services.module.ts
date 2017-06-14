import {NgModule} from "@angular/core";
import {GithubService} from "./api/github/github.service";

@NgModule({
  providers: [GithubService],
})

export class ServicesModule {
}
