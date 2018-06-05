/**
 * Created by training on 6/5/2018.
 */
function writeString(name) {
    console.log("Write string: ", name);
}
writeString("andra");
var Test = /** @class */ (function () {
    function Test(details) {
        this.name = details.name;
        this.nr = details.nr;
        this.bolVar = details.bolVar;
        this.list = details.list;
    }
    return Test;
}());
var test = new Test({ name: "andra", nr: 6, bolVar: true, list: [4, 8, 9] });
console.log(test);
