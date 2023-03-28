import { Component, OnInit } from '@angular/core';

interface ViewLayoutConfig {
  showLeft: 'none' | 'hiden' | 'show';
  showRight: 'none' | 'hiden' | 'show';
  showHeader: 'none' | 'hiden' | 'show';
  showFooter: 'none' | 'hiden' | 'show';
}

@Component({
  selector: 'etx-view-layout',
  templateUrl: './view-layout.component.html',
  styleUrls: ['./view-layout.component.scss'],
})
export class ViewLayoutComponent implements OnInit {
  viewConfig: ViewLayoutConfig = {
    showFooter: 'show',
    showHeader: 'show',
    showLeft:'show',
    showRight:'none'
  };

  constructor() {}

  ngOnInit(): void {}
}
