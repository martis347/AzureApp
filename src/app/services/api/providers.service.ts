import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Utilities} from "../../misc/utilities";

@Injectable()
export class ProvidersService {
  constructor(private http: Http) { }

  public GetProviders(date: string): Observable<any> {
    let result = this.http.get(Utilities.GetApiUrl() + 'providers/' + date);

    return result;
  }
}
