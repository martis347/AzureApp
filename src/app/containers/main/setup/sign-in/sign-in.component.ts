import {Component, AfterViewInit} from '@angular/core';
import {StorageService} from '../../../../services/storage.service';
import {Constants} from '../../../../misc/constants';
import {Router} from '@angular/router';

declare const gapi: any;

@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.css']
})
export class SignInComponent implements AfterViewInit {
  timeout;
  showContent = false;

  constructor(private router: Router, private storage: StorageService) {
    this.timeout = setTimeout(() => this.showContent = true, 500);
  }

  ngAfterViewInit() {
    this.renderButton();
  }

  onSuccess(googleUser) {
    clearTimeout(this.timeout);
    this.storage.AddItem('access_token', googleUser.Zi.access_token);
    this.storage.AddItem('authenticated', Date.now().toString());
    location.reload();
  }

  renderButton() {
    const that = this;
    if (!window['gapi']) {
      setTimeout(() => this.renderButton(), 100);
    } else {
      gapi.signin2.render('google-signin2', {
        'scope': Constants.REQUIRED_SCOPES,
        'width': 200,
        'height': 50,
        'margin': 'auto',
        'theme': 'light',
        'onsuccess': this.onSuccess.bind(that)
      });
    }
  }
}
