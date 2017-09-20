import {Component, Input} from '@angular/core';
import {MdDialog, MdSidenav} from '@angular/material';
import {Utilities} from '../../../../misc/utilities';
import {ActivatedRoute} from '@angular/router';
import {FeedbackComponent} from '../../modals/feedback/feedback.component';
import {FeedbackService} from '../../../../services/api/feedback.service';
import {StorageService} from '../../../../services/storage.service';

@Component({
  selector: 'toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})

export class ToolbarComponent {
  @Input() sidenav: MdSidenav;
  @Input() text: string;

  constructor(private activatedRoute: ActivatedRoute, public dialog: MdDialog, private feedbackService: FeedbackService, private storage: StorageService) {
    if (!this.text) {
      this.activatedRoute.params.subscribe(params => {
        this.text = Utilities.GetDisplayFormat(params['date']);
      });
    }
  }

  onFeedback = () => {
    const dialogRef = this.dialog.open(FeedbackComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.feedbackService.sendFeedback(result).subscribe();
      console.log(result);
    });
  }

  isSignedIn() {
    return Utilities.IsSignedIn(this.storage);
  }
}
