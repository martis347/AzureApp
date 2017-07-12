import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Utilities} from "../../misc/utilities";

@Injectable()
export class FeedbackService {
  constructor(private http: Http){

  }

  public sendFeedback(feedback) {
    return this.http.post(Utilities.GetApiUrl() + 'feedback', feedback);
  }
}
