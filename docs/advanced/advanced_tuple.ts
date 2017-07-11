// 元组

//1.
let king: [string, number] = ['king', 25];

// 2.
let king2: [string, number];
king2[0] = 'kk';
king2[1] = 25;

king2[0].slice(1);
king2[1].toFixed(2);

// 当赋值给越界的元素时，它类型会被限制为元组中每个类型的联合类型
king2.push(true);
