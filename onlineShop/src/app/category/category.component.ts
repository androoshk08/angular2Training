import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Category} from "../model/category";
import {ProductComponent} from "../product/product.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryId:number;
  cat: Category;

  @ViewChild(ProductComponent)
  product: ProductComponent;

  constructor(private route:ActivatedRoute) {
    //console.log(this.cat.products);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(category=>console.log(category));
  }

}
