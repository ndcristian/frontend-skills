import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent implements OnInit , AfterViewInit{
  @Input() title: string;

  @ContentChild('contentProjection') contentProjection: ElementRef;

  constructor() {}


  prop1: string = 'prop1';
  prop2: string = 'prop2';
  prop3: string = 'prop3';

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log(this.contentProjection);
  }
}
