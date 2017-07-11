# typescript_demo
typescript 语法

1. 原始数据类型

    原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol

        let isDone:boolean = true;

        let decLiteral: number = 6;
        let hexLiteral: number = 0xf00d;
        // ES6 中的二进制表示法
        let binaryLiteral: number = 0b1010;
        // ES6 中的八进制表示法
        let octalLiteral: number = 0o744;
        let notANumber: number = NaN;
        let infinityNumber: number = Infinity;


        JavaScript 没有空值（Void）的概念，在 TypeScirpt 中，可以用 void 表示没有任何返回值的函数
        声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
        let unusable: void = undefined;

        undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null。
        与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
        而 void 类型的变量不能赋值给 number 类型的变量
        
        let u: undefined = undefined;
        let n: null = null;
    
    任意值

        如果是 any 类型，则允许被赋值为任意类型
        变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型

        let myFavoriteNumber: any = 'seven';
        myFavoriteNumber = 7;

    联合类型

        联合类型使用 | 分隔每个类型, 但是不能为其他类型，否则报错
        let myFavoriteNumber: string | number

        当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法

2. 对象的类型

    接口

        定义的变量比接口少了一些属性是不允许的, 多一些属性也是不允许的

        interface Person{
            name : string;
            age : number
        }
        let user: Person = {
            name : "string",
            age : 78
        }

        可选属性 ( 属性名加 ? 表示可选属性 => 不允许添加未定义的属性 )

        任意属性 [propName: string]:any 
            一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性( 如果任意属性是 string , 可选是 number，编译将会报错 )

        只读属性 readonly attribute
    
    数组 ( 使用「类型 + 方括号」来表示数组 )

        let fibonacci: number[] = [1, 1, 2, 3, 5];

        泛型

            let fibonacci: Array<number> = [1, 1, 2, 3, 5];

        接口 

            interface NumberArray = {
                [index: number] : number
            }
            let fibonacci: NumberArray = [1, 1, 2, 3, 5];
        
        类数组

            function sum() {
                let args: IArguments = arguments;
            }
    
    函数

        输入多余的（或者少于要求的）参数，是不被允许的

        function sum(x:number, y:number){return x+y};

        let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
            return x + y;
        };

        接口  

            interface SearchFunc {
                (source: string, subString: string): boolean;
            }
            let mySearch: SearchFunc;
            mySearch = function (source: string, subString: string) {
                return source.search(subString) !== -1;
            }

        可选参数 ( 与接口中的可选属性类似，我们用 ? 表示可选的参数 )

        默认值 buildName(firstName: string = 'Xcat', lastName: string)

        剩余参数 push(array, ...items)
            ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）

            push(array: any[], ...items: any[])

3. 类型断言

    语法

        <类型>值  或

        值 as 类型

        function getLength(something: string | number): number {
            if ((<string>something).length) {
                return (<string>something).length;
            } else {
                return something.toString().length;
            }
        }

4. 声明文件

    使用 declare 关键字来定义它的类型，帮助 TypeScript 判断我们传入的参数类型对不对

        declare var jQuery: (string) => any;

        jQuery('#foo');

    我们约定声明文件以 .d.ts 为后缀。

    然后在使用到的文件的开头，用「三斜线指令」表示引用了声明文件：

        /// <reference path="./jQuery.d.ts" />

5. 内置对象

    ECMAScript 的内置对象

        Boolean、Error、Date、RegExp ...

    DOM 和 BOM 的内置对象

        Document、HTMLElement、Event、NodeList ...

    用 TypeScript 写 Node.js，则需要引入第三方声明文件
    npm install @types/node --save-dev

进阶

1. 类型别名

    使用 type 创建类型别名

        type Name = string;
        type NameResolver = () => string;
        type NameOrResolver = Name | NameResolver;
        function getName(n: NameOrResolver): Name {
            if (typeof n === 'string') {
                return n;
            }
            else {
                return n();
            }
        }

2. 字符串字面量类型

    字符串字面量类型用来约束取值只能是某几个字符串中的一个

        type EventNames = 'click' | 'scroll' | 'mousemove';
        function handleEvent(ele: Element, event: EventNames) {
            // do something
        }
        handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
        handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'

3. 元组

    声明

        let king: [string, number] = ['king', 25];
        let king: [string, number]
        king[0] = 'king';
        king[1] = 25;

    越界的元素 ( 当赋值给越界的元素时，它类型会被限制为元组中每个类型的联合类型 )

        当赋值给越界的元素时，它类型会被限制为元组中每个类型的联合类型

4. 枚举

    enum

        enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

        // 未手动赋值的枚举项会接着上一个枚举项递增
        // 如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的
        // 手动赋值的枚举项可以不是数字，此时需要使用类型断言来让tsc无视类型检查
        手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1

    枚举项有两种类型：常数项（constant member）和计算所得项（computed member）

        enum Color {Red, Green, Blue = "blue".length}

5. 类与接口
    
    implements 一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现
    
        interface Alarm{
            ...
        }
        interface Light{

        }
        class Car2 implements Alarm, Light {
            alert() {
                console.log('Car alert');
            }
            lightOn() {
                console.log('Car light on');
            }
            lightOff() {
                console.log('Car light off');
            }
        }
    
    接口继承

        interface LightableAlarm extends Alarm {
            lightOn();
            lightOff();
        }

    接口继承类

6. 泛型

    泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

        function createArray<T>(length: number, value: T): Array<T> {
            let result = [];
            for (let i = 0; i < length; i++) {
                result[i] = value;
            }
            return result;
        }
        createArray<string>(3, 'x'); // ['x', 'x', 'x']

    多个泛型参数

        function swap<T, U>(tuple: [T, U]): [U, T] {
            return [tuple[1], tuple[0]];
        }
        swap([7, 'seven']); // ['seven', 7]

7. 声明合并

    函数的合并 ( 重载 )

        function reverse(x: number): number;
        function reverse(x: string): string;
        function reverse(x: number | string): number | string {
            if (typeof x === 'number') {
                return Number(x.toString().split('').reverse().join(''));
            } else if (typeof x === 'string') {
                return x.split('').reverse().join('');
            }
        }

    接口的合并 ( 合并的属性的类型必须是唯一的 )

        interface Alarm {
            price: number;
        }
        interface Alarm {
            weight: number;
        }

        interface Alarm {
            price: number;
            weight: number;
        }