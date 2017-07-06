import {NgModule} from '@angular/core';
import {GithubService} from './api/github/github.service';
import {ErrorHandlerService} from './error-handling/error-handler.service';
import {ProvidersService} from "./api/providers.service";
import {ExtendedHttpService} from "./extended-http.service";
import {StorageService} from "./storage.service";
import {PeopleService} from "./api/people.service";
import {NotificationsService} from "./notifications.service";
import {DishesService} from "./api/dishes.service";

@NgModule({
  providers: [
    GithubService,
    ErrorHandlerService,
    PeopleService,
    ProvidersService,
    ExtendedHttpService,
    StorageService,
    NotificationsService,
    DishesService
  ],
})

export class ServicesModule {
}
