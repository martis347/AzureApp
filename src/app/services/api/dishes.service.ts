import { Injectable } from '@angular/core';
import {Utilities} from "../../misc/utilities";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";

@Injectable()
export class DishesService {
  constructor(private http: Http) { }

  public OrderDish(date: string, order): Observable<any> {
    let result = this.http.put(Utilities.GetApiUrl() + 'dishes/' + date, order);

    return result;
  }

  public GetOrderedDishes(date: string, username: string): Observable<any> {
    let result = this.http.get(Utilities.GetApiUrl() + 'dishes/' + date + '/' + username);

    return result;
  }

  public GetOrdersCount(date: string): Observable<any> {
    const result = this.http.get(Utilities.GetApiUrl() + 'dishes/ordersCount/' + date);

    return result;
  }
}
