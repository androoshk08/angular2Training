import {Product} from "./product";
/**
 * Created by training on 6/14/2018.
 */

export class Category {
  id: number;
  name: string;
  products: Array<Product>;

  constructor (id: number, name:string, products: Array<Product>) {
    this.id = id;
    this.name = name;
    this.products = products;
  }
}

