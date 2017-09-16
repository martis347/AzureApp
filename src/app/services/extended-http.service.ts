import { Injectable } from '@angular/core';
import {Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { StorageService } from './storage.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {NameChangingComponent} from '../containers/main/modals/name-changing/name-changing.component';
import {MdDialog} from '@angular/material';

@Injectable()
export class ExtendedHttpService extends Http {
  constructor(private dialog: MdDialog, private backend: XHRBackend, private defaultOptions: RequestOptions, private _storage: StorageService) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === 'object') {
      url.headers.append('access_token', this._storage.GetItem('access_token'));
    }

    return super.request(url, options).catch(this.catchErrors());
  }

  private catchErrors() {
    return (res: Response) => {
       if (res.status === 400) {
         if (res.json().message === 'User with given name not found in sheet') {
           this.dialog.open(NameChangingComponent, {disableClose: true, data: {cancellable: false}, width: '430px', height: '210px'});
           res['message'] = res.json().message || 'An error occurred while processing request.';
         }
      } else if (res.status === 401) {
        console.log('Access_token_expired: refreshing site to refresh token.');
        this._storage.RemoveItem('access_token');
        window.location.reload();
      } else if (res.status === 403) {
        res['message'] = 'You do not have permission to access data.';
      } else if (res.status === 500) {
        res['message'] = 'Server error has occurred, please try again.';
      } else {
        res['message'] = res.json().message || 'An error occurred while processing request.';
      }
      return Observable.throw(res);
    };
  }
}
