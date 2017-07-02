import {NgModule} from '@angular/core';
import {GithubService} from './api/github/github.service';
import {ErrorHandlerService} from './error-handling/error-handler.service';
import {UsersService} from "./api/users.service";
import {ProvidersService} from "./api/providers.service";
import {ExtendedHttpService} from "./extended-http.service";
import {StorageService} from "./storage.service";

@NgModule({
  providers: [
    GithubService,
    ErrorHandlerService,
    UsersService,
    ProvidersService,
    ExtendedHttpService,
    StorageService
  ],
})

export class ServicesModule {
}
