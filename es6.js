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