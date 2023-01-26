import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'etx-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  /** Input to set the colour of message and progress bar. */
  @Input() type: string | 'primary' = 'primary';
  /** Input to change the position of message and progress bar. */
  @Input() variant: string = 'inline';
  /** Input to add icon to the message. */
  @Input() iconVariant: string = undefined;
  /** Input to add progress percentage. */
  @Input() progress = 20;
  /** Input to show/hide percentage. */
  @Input() showPercentText = true;
  /** Input to handle the message size of progress. */
  @Input() progressMessageSize: number = undefined;

  /** References progress message element. */
  private progressMessageRef: ElementRef;
  showMessageWrapper: boolean = true;

  @ViewChild("progress_message_ref", { static: false }) set content(
    content: ElementRef
  ) {
    if (content) {
      this.progressMessageRef = content;
      if (
        !!!this.progressMessageRef.nativeElement.innerText ||
        this.iconVariant === undefined ||
        (!this.showPercentText && this.variant !== "top")
      )
        this.showMessageWrapper = false;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
