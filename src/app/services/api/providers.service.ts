import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProvidersService {
  constructor(private http: Http) { }

  public GetProviders(date: string): Observable<any> {
    let result = this.http.get("http://localhost:15338/api/providers/" + date);

    return result;
  }
}
