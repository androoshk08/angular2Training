import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product : Product;
  product1 : Product;
  product2 : Product;
  product3 : Product;
  productList: Array<Product>;
  major: number;
  minor: number;

  constructor() {
    this.minor = 3;
    this.major = 4;
    this.product = new Product("", "" ,0);
    this.product1 = new Product("Prod1","Manufacturer1",12);
    this.product2 = new Product("Prod2","Manufacturer2",44);
    this.product3 = new Product("Prod3","Manufacturer3",66);
   this.productList = new Array(this.product1, this.product2, this.product3);
  }

  ngOnInit() {
  }

  addProduct(product: {productName: string, productManufacturer: string,productPrice: number}) {
    var length = this.productList.push(product);
    console.log(this.productList + length.toLocaleString());
  }

}


