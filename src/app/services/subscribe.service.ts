import { Injectable } from '@angular/core';
import {SubscribeAction} from '../models/SubscribeAction';
import {Subject} from 'rxjs/Subject';

export class Subscriber {
  public Subject: Subject<any>;
  public Action: SubscribeAction;
}

@Injectable()
export class SubscribeService {
  private subscribers: Subscriber[] = [];
  constructor() { }

  public Subscribe(action: SubscribeAction): Subject<any> {
    const subject = new Subject();
    this.subscribers.push({
      Action: action,
      Subject: subject
    });

    return subject;
  }

  public Unsubscribe(action: SubscribeAction) {
    this.subscribers = this.subscribers.filter(s => s.Action !== action);
  }

  public DoAction(action: SubscribeAction, params: object = undefined) {
    this.subscribers
      .filter(s => s.Action === action)
      .forEach(s => s.Subject.next(params));
  }
}
