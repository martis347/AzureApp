import {Injectable} from '@angular/core';
import {MdSnackBar} from "@angular/material";

@Injectable()
export class NotificationsService {
  constructor(private snackBar: MdSnackBar) {
  }

  public Notify(message, duration = 0) {
    this.snackBar.open(message, 'OK', {duration: duration} );
  }

}
