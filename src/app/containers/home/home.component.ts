import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

  constructor(private _http: Http) {
  }


  ngOnInit(): void {
    console.log('Testing blet');
  }

  test() {
    const a = this.getHeroes();

    a.subscribe(product => {
      console.log(product);
      window.alert('Response from server: ' + product._body);
    }, error => {
      console.log(error);
      window.alert('An error has occured');
    });
  }

  getHeroes(): Observable<any> {
    return this._http.get('http://besmart1-api.azurewebsites.net/api/values');
  }
}
