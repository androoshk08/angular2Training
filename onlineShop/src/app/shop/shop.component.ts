import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {Category} from "../model/category";
import {Product} from "../model/product";
import {CategoryComponent} from "../category/category.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  categories: Array<Category>;

  @Output(`cat`) cat: Category;

  constructor(private router:Router) {
    var educationalToys = new Category(1, "Educational toys", new Array<Product>());
    var buildingToys = new Category(2, "Building toys", new Array<Product>());
    var outdoorToys = new Category(3, "Outdoor toys", new Array<Product>());
    var miscToys = new Category(4, "Misc toys", new Array<Product>());

    var puzzle = new Product(1, "Puzzle", 20, educationalToys);
    var coloringBook = new Product(2, "Coloring book", 15, educationalToys);

    var magnaTiles = new Product(3, "Magna Tiles", 300, buildingToys);
    var tegu = new Product(4, "Tegu", 1345, buildingToys);
    var lego = new Product(5, "Lego", 200, buildingToys);

    var slide = new Product(6, "Slide", 1000, outdoorToys);
    var waterGun = new Product(7, "Water gun", 56, outdoorToys);
    var rope = new Product(8, "Rope", 35, outdoorToys);
    var swing = new Product(9, "Swing", 250, outdoorToys);

    this.categories = new Array(educationalToys, buildingToys, outdoorToys, miscToys);
  }

  ngOnInit() {
  }

  goToCategory(cat:Category){
    this.router.navigate(['category/' +cat.id,{category:cat}]);
  }

}
