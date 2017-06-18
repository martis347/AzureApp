import {NgModule} from '@angular/core';
import {GithubService} from './api/github/github.service';
import {ErrorHandlerService} from './error-handling/error-handler.service';

@NgModule({
  providers: [
    GithubService,
    ErrorHandlerService
  ],
})

export class ServicesModule {
}
