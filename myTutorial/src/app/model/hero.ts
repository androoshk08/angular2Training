/**
 * Created by training on 6/13/2018.
 */
export class Hero {
  id: number;
  name: string;
  longName: string;
  power: string;

  constructor (id: number, longName: string, power:string, name: string) {
      this.id = id;
      this.name = name;
      this.power = power;
      this.longName = longName;
  }
}

