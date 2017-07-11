// 枚举

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true

// 手动赋值
// 未手动赋值的枚举项会接着上一个枚举项递增
// 如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的
enum Days2 {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

// 手动赋值的枚举项可以不是数字，此时需要使用类型断言来让tsc无视类型检查
enum Days3 {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S"};


// 手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1
enum Days4 {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};

// 枚举项有两种类型：常数项（constant member）和计算所得项（computed member）
enum Color {Red, Green, Blue = "blue".length};


// 如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错
// error
/**
 * enum Color {Red = "red".length, Green, Blue};
 *
 */

// 常数枚举
const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

// 外部枚举
declare enum Directions2 {
  Up,
  Down,
  Left,
  Right
}
let directions2 = [Directions2.Up, Directions2.Down, Directions2.Left, Directions2.Right];