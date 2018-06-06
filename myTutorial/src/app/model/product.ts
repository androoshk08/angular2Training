/**
 * Created by training on 6/6/2018.
 */
export class Product {
  productName: string;
  productManufacturer: string;
  productPrice: number;

  constructor (productName: string, productManufacturer: string,productPrice: number) {
    this.productPrice = productPrice;
    this.productName = productName;
    this.productManufacturer = productManufacturer;
  }

}
