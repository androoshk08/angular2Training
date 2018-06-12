import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {MoviesService} from "../services/movies.service";
import {Movie} from "../model/movie";

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
  movieService: MoviesService;
  movie: Movie;

  constructor(movieService:MoviesService) {
    this.movieService = movieService;
    this.minor = 3;
    this.major = 4;
    this.product = new Product("", "" ,0);
    this.product1 = new Product("Prod1","Manufacturer1",12);
    this.product2 = new Product("Prod2","Manufacturer2",44);
    this.product3 = new Product("Prod3","Manufacturer3",66);
   this.productList = new Array(this.product1, this.product2, this.product3);
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe((data) => console.log(data));
    // this.movieService.getError().subscribe((data) => {
    //   console.log(`merge bine si frumos`);
    // }, (err) => {
    //   console.log(JSON.stringify(err));
    //   console.log(`nu merge pentru ca: + ${err.error.error}`);
    // });

    this.movieService.getPost({title: "Andra movie"}).subscribe((data) => console.log(data));
    this.movieService.getMovie(2).subscribe((data: Movie) => {
      this.movie = data;
      console.log(this.movie);
    })
  }

  addProduct(product: {productName: string, productManufacturer: string,productPrice: number}) {
    var length = this.productList.push(product);
    console.log(this.productList + length.toLocaleString());
  }

}


