import {Component, ViewChild, Input, EventEmitter, Output} from "@angular/core";
import {StorageService} from "../../../../services/storage.service";
import {Constants} from "../../../../misc/constants";
import {Router} from "@angular/router";
import {Utilities} from "../../../../misc/utilities";

declare const gapi: any;

@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.css']
})
export class SignInComponent {
  timeout;
  showContent: boolean = false;

  constructor(private router: Router, private storage: StorageService) {
    this.timeout = setTimeout(() => this.showContent = true, 500);
  }

  ngAfterViewInit() {
    this.renderButton();
  }

  onSuccess(googleUser){
    clearTimeout(this.timeout);
    this.storage.AddItem('access_token', googleUser.Zi.access_token)
    location.reload();
  }

  renderButton() {
    const that = this;
    if(!window['gapi']) {
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
