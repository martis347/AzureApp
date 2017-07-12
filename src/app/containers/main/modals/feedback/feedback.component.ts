import {Component, ElementRef, ViewChild} from "@angular/core";
import {MdCheckbox, MdSlider} from "@angular/material";

@Component({
  selector: 'feedback',
  templateUrl: 'feedback.component.html',
  styleUrls: ['feedback.component.css']
})
export class FeedbackComponent {
  @ViewChild('checkbox') checkbox: MdCheckbox;
  @ViewChild('designValue') designValue: MdSlider;
  @ViewChild('comment') comment: ElementRef;

  onSubmit() {
    return {
      designRating: this.designValue.value,
      likesIdea: this.checkbox.indeterminate ? null : this.checkbox.checked,
      comment: this.comment.nativeElement.value
    };
  }
}
