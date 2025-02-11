import { Component, Inject, OnInit } from '@angular/core';
import { InjectableService } from '../injectable-service';
import {
  CONFIG_TOKEN,
  INJ_CONFIG,
  InjectableConfig,
} from '../injectable-config';

@Component({
  selector: 'etx-injectable-parent',
  templateUrl: './injectable-parent.component.html',
  styleUrls: ['./injectable-parent.component.scss'],
  providers: [
    InjectableService,
    {
      provide: CONFIG_TOKEN,
      // useFactory: () => {
      //   INJ_CONFIG;
      // }, OR we can use useValue property 
      useValue: INJ_CONFIG
    },
  ],
})
export class InjectableParentComponent implements OnInit {
  constructor(
    private injectableService: InjectableService,
    @Inject(CONFIG_TOKEN) private config: InjectableConfig // this is how to inject objects
  ) {
    console.log(' Parent component ' + injectableService.id);
    console.log(config);
  }

  ngOnInit(): void {}
}
