import {NgModule} from '@angular/core';
import {GithubService} from './api/github/github.service';
import {ErrorHandlerService} from './error-handling/error-handler.service';
import {UsersService} from "./api/users.service";

@NgModule({
  providers: [
    GithubService,
    ErrorHandlerService,
    UsersService
  ],
})

export class ServicesModule {
}
