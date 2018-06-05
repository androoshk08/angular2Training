/**
 * Created by training on 6/5/2018.
 */

function writeString(name: String): void {
    console.log("Write string: ",name);
}


writeString("andra");
//writeString(4);

interface Val {
    name: String;
    nr: Number;
    bolVar: Boolean;
    list: Array<Number>;
}

class Test {
    private name: String;
    nr: Number;
    bolVar: Boolean;
    list: Array<Number>;

    constructor (details: Val) {
        this.name = details.name;
        this.nr = details.nr;
        this.bolVar = details.bolVar;
        this.list = details.list;
    }
}

let test = new Test({name:"andra", nr:6, bolVar:true, list:[4,8,9]});
console.log(test);

