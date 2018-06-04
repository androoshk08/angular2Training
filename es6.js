/**
 * Created by training on 6/4/2018.
 */
let x =1;
console.log(x);

if (x == 1) {

    let y = 3;
    console.log(y);
}

//console.log(y);

var f = (x,y) => {
    let prod = x*y;
    return prod;
}

console.log(f(6,7));

var list = [1,2,3];
var [a, , b] = list;
console.log(a,b);
[b,a] = [a,b];
console.log(a,b);

let planets = ["Mercury", "Venus", "Terra", "Mars"];
let [e, t, g, h] = planets;
console.log(e,t,g,h);

let [first, ...others] = planets;
console.log(first, others);


var wordsInTheNovel  = (author, title, ...keywords) => {
    for (let index in keywords) {
        console.log("Keywords: " + keywords[index]);
    }
}

wordsInTheNovel("Frank", "Dune", "planet", "universe", "people", "melange");




//var getASTNode = () => {
//   return [op:2, lhs:4, rhs:5];
//}
//var {op, lhs, rhs} = getASTNode();
//console.log(op, lhs, rhs);


var crackTheSafe = () => {
    var users = ["Bill", "Jane", "Dorel"];
    for (let index in users) {
        var user = users[index];
        //requestForMoney(900, function(cash){
        //transferMoney(cash, index);
        setTimeout(function() {console.log("user: " + user)}, 1000);
        //});
    }
}

crackTheSafe();

let from = "Dan", to = "all", greeting = "Hello";
var greet = () => {
    var str = "GUGU"; return str;
}
console.log(`${greet()} ${to}, 
 
 This message will keep all its newlines! 
    And tabs! All!
    
    Isn't that cool?
  
  Regards, ${from}`);


let account1  = {owner:"J1", address: "a1"};
let account2 = {owner:"J2", address: "a2"};
let bank = new Map();
bank.set(account1, 5000);
bank.set(account2, 59098098);
for (let [account, amount] of bank) {
    console.log(account, amount);
}


let account11  = {owner:"J1", address: "a1"};
let account22 = {owner:"J2", address: "a2"};
let bank2 = new WeakMap();
bank2.set(account11, 5000);
bank2.set(account22, 1023);
console.log(bank2.get(account11));
account22 = null;
console.log(bank2.get(account22));

class User {
    constructor(username, age) {
        this.username = username;
        this.age = age;
    }

    isAdult() {
        return this.age >= 18;
    }
}

let user = new User("Andra", 32);
console.log(user.isAdult());
console.log("age " + user.age);
console.log("name " + user.username);