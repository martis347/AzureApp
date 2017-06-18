import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ObservableInput} from 'rxjs/Observable';

@Injectable()
export class ErrorHandlerService {

  handle(error: Response | any, caught: Observable<any>): ObservableInput<any> {
    window.alert(error.json().message);
    return Observable.throw(error.json().message);
  }
}
