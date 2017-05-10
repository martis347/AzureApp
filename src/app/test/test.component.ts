import { Component, OnInit }  from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'test',
  templateUrl: './test.component.html'
})

export class TestComponent implements OnInit {

  constructor(private _http: Http) { }


  ngOnInit(): void {
    console.log('Testing blet');
  }

  test(){
    var a = this.getHeroes();

    a.subscribe(
      product => {
		  console.log(product); 
		  window.alert("Response from server: " + product.body);
	  },
      error => {
		  console.log(error);
		  window.alert("An error has occured");
	  });
  }

  getHeroes(): Observable<any> {
    return this._http.get("http://besmart1-api.azurewebsites.net/api/values");
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
