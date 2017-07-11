// 函数

function sum(x: number, y: number) {
    return x + y;
}

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};


// 接口
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1;
}

// 可选参数 与接口中的可选属性类似，我们用 ? 表示可选的参数
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let king = buildName('bol', 'kk');
let king2 = buildName('bol');

// 参数默认值
function buildName2(firstName: string = 'Xcat', lastName: string) {
  return firstName + ' ' + lastName;
}
let king3 = buildName2('bol', 'kk');
let king4 = buildName2(undefined, 'bol');

// 剩余参数
function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
    array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);

// 重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}