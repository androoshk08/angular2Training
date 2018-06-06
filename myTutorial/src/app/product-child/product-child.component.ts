import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {Product} from '../model/product';
import {log} from "util";

@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.css']
})
export class ProductChildComponent implements OnInit, OnChanges{

  @Input() major: number;
  @Input() minor: number;
  @Input() product: Product;
  @Input('master') masterName: string;
  changeLog: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes : {[propKey:string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let from = JSON.stringify(changedProp.previousValue);
      let to = JSON.stringify(changedProp.currentValue);
      log.push(`${propName} changed from ${from} to ${to}`);
    }

    this.changeLog.push(log.join(','));
  }

}
