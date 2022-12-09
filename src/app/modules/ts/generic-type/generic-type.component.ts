import { Component, OnInit } from '@angular/core';
import { Phone, Storage, StorageModel } from './generic-storage';

@Component({
  selector: 'app-generic-type',
  templateUrl: './generic-type.component.html',
  styleUrls: ['./generic-type.component.scss'],
})
export class GenericTypeComponent implements OnInit {
  storageobject: Phone = new Phone();
  storageHouse: Storage<StorageModel> = new Storage<StorageModel>();

  constructor() {}

  ngOnInit(): void {
    this.storageobject.setStorage({
      owner: 'Cristian',
      storageLocation: 'W1',
      id: 1,
    });
    this.storageobject.setIsColdArea(true)
    this.storageobject.setIsFragil(true)

    this.storageHouse.addProduct(this.storageobject)
    this.storageHouse.addProduct(this.storageobject)

    console.log(this.storageHouse.getProductOwnerFromLocation(1))


  }
}
