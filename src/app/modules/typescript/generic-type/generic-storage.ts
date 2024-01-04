type Product = {
  owner: string;
  id: number;
  storageLocation: string;
};

export interface StorageModel {
  // storageObject: Product;
  // isColdArea: boolean;
  // isFragile: boolean;

  setStorage(value: Product): void;

  getStoge(): Product;

  setIsColdArea(value: boolean): void;

  getIsColdArea(): boolean;

  setIsFragil(value: boolean): void;

  getIsFragil(): boolean;
}

export class Storage<T extends StorageModel> {
  public data: T[] = [];

  addProduct(prod: T) {
    this.data.push(prod);
  }

  getProdFromLocation(index: number): T {
    return this.data[index];
  }

  getProductOwnerFromLocation(index: number) {
    return this.data[index].getStoge().owner;
  }
}

export class Test {
  test: Storage<Phone> = new Storage<Phone>();
  howToUseIt() {
    this.test.data;
    this.test.getProdFromLocation(1)
  }
}
export class Phone implements StorageModel {
  producer: string;
  model: string;
  procesor: string;
  isSmart: boolean;

  storageObject: Product;
  isColdArea: boolean;
  isFragile: boolean;

  setStorage(value: Product): void {
    this.storageObject = value;
  }
  getStoge(): Product {
    return this.storageObject;
  }
  setIsColdArea(value: boolean): void {
    this.isColdArea = value;
  }
  getIsColdArea(): boolean {
    return this.isColdArea;
  }
  setIsFragil(value: boolean): void {
    this.isFragile = value;
  }
  getIsFragil(): boolean {
    return this.isFragile;
  }
}
