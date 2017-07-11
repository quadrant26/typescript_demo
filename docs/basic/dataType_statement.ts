// 声明文件

// 我们约定声明文件以 .d.ts 为后缀。
// 然后在使用到的文件的开头，用「三斜线指令」表示引用了声明文件：
// /// <reference path="./jQuery.d.ts" />


declare var jQuery: (string) => any;

jQuery('#foo');