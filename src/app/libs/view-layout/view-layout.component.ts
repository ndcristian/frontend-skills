import { Component, HostListener, OnInit } from '@angular/core';
import { expand } from 'rxjs';

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
    },
  };
  toggle;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log('isMobile:', this.isMobile());
  }

  constructor() {}

  ngOnInit(): void {
    this.initCloseureFunct();
    this.viewConfig.body.width = 100 - this.viewConfig.left.width - this.viewConfig.right.width;
  }

  initCloseureFunct() {
    const collapsed = 0;
    let toggleState: any = {
      left: true,
      right: true,
      header: true,
      footer: true,
    };
    const viewExppandValues: any = {
      left: this.viewConfig.left.width,
      right: this.viewConfig.right.width,
      header: this.viewConfig.header.width,
      footer: this.viewConfig.footer.width,
    };
    this.toggle = (menu: string) => {
      this.viewConfig[menu].width = toggleState[menu]
        ? collapsed
        : viewExppandValues[menu];
      if (this.viewConfig[menu].width === 0) {
        this.viewConfig.body.width += viewExppandValues[menu].width
      } else {
        this.viewConfig.body.width -= viewExppandValues[menu].width
      }
      toggleState[menu] = !toggleState[menu];
    };
  }

  invocFunct() {}

  public isMobile(): boolean {
    return window.innerWidth < 767.98;
  }
}
