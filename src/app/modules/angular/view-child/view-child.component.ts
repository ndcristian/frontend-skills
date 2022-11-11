import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ContentCardComponent } from 'src/app/libs/content-card/content-card.component';
import { DefaultButtonComponent } from 'src/app/libs/default-button/default-button.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss'],
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  // if more of the same , the first one will be selected
  // the earlier moment when this is available in DOM is in AfterViewInit life cicle hook
  // @ViewChild can not query deep down in the component template
  @ViewChild(ContentCardComponent) contentCard: ContentCardComponent;
  @ViewChild('btn') btn: DefaultButtonComponent;
  @ViewChild('mainWrapper') mainWrapper: ElementRef;
  @ViewChild('contentElement', { read: ElementRef }) contentElement: ElementRef;

  @ViewChildren('listCards') cardList: QueryList<ContentCardComponent>;

  @ViewChildren('listCards', { read: ElementRef })
  cardListAsDomElements: QueryList<ElementRef>;

  titleList: string[] = ['Title1', 'Title2'];

  constructor() {}

  ngAfterViewInit(): void {
    this.cardList.changes.subscribe((newCard) => {
      console.log('New card title added: ', newCard);
    });
    this.cardListAsDomElements.changes.subscribe((newCard) => {
      console.log('New card title added as DOM element: ', newCard);
    });
  }

  ngOnInit(): void {
    console.log('From NG_ON_INIT');
    console.log(this.contentCard);
  }

  handleClickBtn() {
    console.log(this.contentCard);
    console.log(this.btn);
    console.log(this.mainWrapper);
    console.log(this.contentElement);
    console.log(this.cardList);
  }

  addNewTitle() {
    this.titleList.push('Title new added');
  }
}
