// 内置对象

let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;

// DOM and BOM
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});

interface Math{
    pow(x:number, y:number) : number
}

interface Document extends Node, GlobalEventHandlers, NodeSelector, DocumentEvent {
  addEventListener(type: 'click', listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
}