// 接口

interface Person{
    readonly id : number;
    name : string;
    age : number;
    sex? : string;
    [propName: string]:any;
}

let king: Person = {
    id : 20115,
    name : "king",
    age : 25,
    sex : "man",
    website: 'http://github.com'
}

king.id = 123