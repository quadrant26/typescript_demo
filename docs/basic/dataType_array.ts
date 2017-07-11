// 数组

// 定义一个数字类型的数组， 将不允许出现其他的数据类型
let fubonacci : number[] = [1, 1, 2, 3];

let arr1: (number | string)[] = [1, 2, 3];
arr1.push("a");
console.log(arr1);

// 泛型
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];
console.log(fibonacci2);

// 用接口表示数组
interface NumberArray{
    [index: number]: number;
}
let fibonacci3: NumberArray = [1, 1, 2, 3, 5];
console.log(fibonacci3);

//any
let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];
console.log(list);

// 类数组
function sum() {
  let args: IArguments = arguments;
}