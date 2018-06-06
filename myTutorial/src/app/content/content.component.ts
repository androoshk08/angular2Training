import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  name: string;
  condition: boolean;
  isSpecial: boolean;
  myVar:string;
  cities: Array<string>;
  currentHero: CurrentHero;

  constructor() {
    this.name = 'Andra';
    this.condition = false;
    this.isSpecial = false;
    this.myVar = "A";
    this.cities = new Array('Miami', 'Sao Paolo', 'New York');
    this.currentHero = new CurrentHero("Hercule");
  }

  ngOnInit() {
  }

  hello() {
    this.condition = true;
    this.isSpecial = true;
    this.myVar = "asdadasdad";
    console.log(this.name );
    var length = this.cities.push(this.name);
    //alert("Hello world!");
    console.log(this.cities + length.toLocaleString());
  }

  delete (city:string) {
    for(var i = 0;i<this.cities.length;i++) {
      if (this.cities[i] == city) {
        //this.cities.splice([i],1);
        console.log(this.cities[i]);
      }
    }
  }

  callPhone(phone:number) {
    console.log(phone);
  }

}

class CurrentHero {
  firstName : string;

  constructor(firstName:string) {
    this.firstName = firstName;
  }

}
