import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ErrorHandlerService} from '../../error-handling/error-handler.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GithubService {
  constructor(private _http: Http, private errorHandler: ErrorHandlerService) {  }

  test(): string {
    return 'test string';
  }

  getUserData(username: string): Observable<Object> {
    const result = this._http.get('https://api.github.com/users/' + username)
      .map(response => response.json())
      .catch(this.errorHandler.handle);

    return result;
  }
}
