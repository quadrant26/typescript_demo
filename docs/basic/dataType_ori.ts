// 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol

// 布尔值
let isDone:boolean = true;
// 使用构造函数创建的不是 boolean
// let createdByNewBoolean:boolean = new Boolean(1);
let createdByBoolean: boolean = Boolean(1);

// 数值
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// 字符串
let myName: string = 'Xcat Liu';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

// 空值
function alertName(): void {
  alert('My name is king');
}
let unusable: void = undefined;

// null && undefined
// let u: undefined = undefined;
// let n: null = null;

// let num: number = undefined;
// let u: undefined;
// let num: number = u;

/**
 * error 
 * let u: void;
 * let num: number = u;
 */ 
// Symbol

// 任意值
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

// 在任意值上访问任何属性都是允许的
let anyThing: any = "hello";
console.log( anyThing.myName);
console.log( anyThing.myName.firstName);

let anyThing2: any = 'Xcat Liu';
anyThing2.setName('Jerry Lee');
anyThing2.setName('Jerry Lee').sayHello();
anyThing2.myName.setFirstName('Cat');

// 联合类型
let myFavoriteNumber2: string | number;
myFavoriteNumber2 = "serven";
myFavoriteNumber2 = 7;

// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
function getString(something: string | number): string {
  return something.toString();
}