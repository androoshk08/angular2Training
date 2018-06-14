import {Category} from "./category";
/**
 * Created by training on 6/14/2018.
 */
export class Product {
  id: number;
  name: string;
  price: number;
  category: Category;

  constructor (id: number, name: string, price:number, category: Category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }
}
