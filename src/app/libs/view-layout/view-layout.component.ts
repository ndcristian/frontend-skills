import { Component, HostListener, OnInit } from '@angular/core';

type DisplayOptions = 'none' | 'hidden' | 'show';

interface ViewLayoutConfig {
  left: {
    show: DisplayOptions;
    width: number;
    collapsed: boolean;
  };
  right: {
    show: DisplayOptions;
    width: number;
    collapsed: boolean;
  };
  header: {
    show: DisplayOptions;
    width: number;
    collapsed: boolean;
  };
  footer: {
    show: DisplayOptions;
    width: number;
    collapsed: boolean;
  };
  body: {
    show?: DisplayOptions;
    width: number;
    collapsed?: boolean;
  };
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
      width: 100,
    },
  };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log('isMobile:', this.isMobile());
  }

  constructor() {}

  ngOnInit(): void {
    console.log('isMobile:', this.isMobile());
  }

  toggleLeft() {
    this.viewConfig.left.width = this.viewConfig.left.collapsed
      ? this.viewConfig.left.width * 1000
      : this.viewConfig.left.width * 0.001;
    this.viewConfig.left.collapsed = !this.viewConfig.left.collapsed;
  }

  public isMobile(): boolean {
    return window.innerWidth < 767.98;
  }
}
