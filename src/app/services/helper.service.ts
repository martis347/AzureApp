import { Injectable } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Injectable()
export class HelperService {

  constructor(private route: ActivatedRoute) { }

  getDateFromRoute(paramName: string) {
    const value = this.route.children
      .filter((a: any) => a.params.getValue(paramName))
      .map((a: any) => a.params.getValue(paramName)[paramName]);
    return value.length ? value[0] : null;
  }
}
