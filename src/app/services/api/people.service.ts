import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Utilities} from "../../misc/utilities";

@Injectable()
export class PeopleService {
  constructor(private http: Http) { }

  public GetPeople(): Observable<any> {
    let result = this.http.get(Utilities.GetApiUrl() + 'people');

    return result;
  }
}
