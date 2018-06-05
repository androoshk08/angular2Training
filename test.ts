/**
 * Created by training on 6/5/2018.
 */

interface Shape {
    color: string| number;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
    color: number;
}

var square = <Square> {};
square.color = 77;
square.sideLength = 10;
square.penWidth = 20;

class Animal {
    private name: string;

    constructor (theName: string) {
        this.name = theName;
    }

    move(meters: number) {
        console.log("meters = " + meters);
    }
}

var animal = new Animal("giraffe");
animal.move(66);

var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x: {suit: string; card:number;}[]):number;
function pickCard(x: number) : {suit:string; card: number;};
function pickCard(x) :any {
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    } else if (typeof x == "number") {
        var pickedSuit = Math.floor(x/13);
        return {suit: suits[pickedSuit], card: x % 13};
    }
}

var myDeck = [{suit: "diamonds", card: 2}, {suit: "spades", card:10}];
var pickedCArd1 = myDeck[pickCard(myDeck)];
alert("card " + pickedCArd1.card + " of " + pickedCArd1.suit);
var pickedCard2 = pickCard(15);
alert("card " + pickedCard2.card + " of " + pickedCard2.suit);