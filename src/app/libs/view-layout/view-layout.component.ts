import { Component, HostListener, OnInit } from '@angular/core';

type DisplayOptions = 'none' | 'hidden' | 'show';

interface ViewOptions {
  show: DisplayOptions;
  width?: number;
  collapsed?: boolean;
}

interface ViewLayoutConfig {
  left: ViewOptions;
  right: ViewOptions;
  header: ViewOptions;
  footer: ViewOptions;
  body: ViewOptions;
}

@Component({
  selector: 'etx-view-layout',
  templateUrl: './view-layout.component.html',
  styleUrls: ['./view-layout.component.scss'],
})
export class ViewLayoutComponent implements OnInit {
  viewConfig: ViewLayoutConfig = {
    left: {
      show: 'show',
      width: 20,
      collapsed: false,
    },
    right: {
      show: 'show',
      width: 10,
      collapsed: false,
    },
    header: {
      show: 'show',
      width: 10,
      collapsed: false,
    },
    footer: {
      show: 'show',
      width: 10,
      collapsed: false,
    },
    body: {
      show: 'show',
      width: 100,
    },
  };
  toggle;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log('isMobile:', this.isMobile());
  }

  constructor() {}

  ngOnInit(): void {
    console.log('isMobile:', this.isMobile());
    this.closeureFunct();
  }

  closeureFunct() {
    const collapsed = 0;
    const exppand = this.viewConfig.left.width;
    let tog = true;
    this.toggle = () => {
      this.viewConfig.left.width = tog ? collapsed : exppand;
      tog = !tog;
    };
  }

  invocFunct() {}

  public isMobile(): boolean {
    return window.innerWidth < 767.98;
  }
}
