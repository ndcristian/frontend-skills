import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'etx-shop-view',
  templateUrl: './shop-view.component.html',
  styleUrls: ['./shop-view.component.scss']
})
export class ShopViewComponent implements OnInit {

  coursList:string[] = ["Java", "Angular", "PHP", "Java Script", "Typescript"]

  constructor() { }

  ngOnInit(): void {
  }

}
