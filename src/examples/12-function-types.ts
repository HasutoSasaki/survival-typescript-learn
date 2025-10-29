// 基本の関数の型宣言
type Increment = (num: number) => number;

const increment: Increment = (num) => num + 1;

// メソッド構文による宣言
type Increment2 = {
    (num: number): number;
}
const increment2: Increment2 = (num) => num + 1;

// 関数から関数の型を宣言する
type Increment3 = typeof increment;

// === 関数宣言の巻き上げ
hello(); // ⭕️
function hello() {
    console.log("Hello World");
}

// hello2(); // ❌

const hello2 = function () {
    console.log("Hello World");
}

// Thisの指すもの
function showThis(this: any) {
    console.log(this); // ブラウザではWindow,DOMなどが入る
}

"use strict"
function showThis2(this: undefined | object) {
    console.log(this); // strict mode にするとundefinedになる
    // undefined
}

// アロー関数の場合
const oneSecond = 1000;

// Timer型を定義
console.log("=== Timer の例")

type Timer = {
    message: string;
    start: () => void;
}

const timer: Timer = {
    message: "時間です！",
    start: function () {
        console.log(this);

        // 従来の関数（thisが変わるため、undefinedになる）
        setTimeout(function (this: any) {
            console.log(this?.message); // undefinedを安全に扱う
        }, oneSecond);

        // アロー関数（thisが保持される）
        setTimeout(() => {
            console.log(this.message) // ✅ 外側のthisを参照できる
        }, oneSecond)
    }
}
timer.start();

// call, apply, bindの振る舞い
console.log("=== call,apply,bindの例")
const obj8 = { name: "foo" };

console.log(showThis.bind(obj8)()); //obj を thisにバインドして、関数呼び出し
console.log(showThis2.bind(obj8)()); // アロー関数の場合

const taroYamada = {
    firstName: "Taro",
    lastName: "Yamada",
    // 従来の関数
    fullName1: function () {
        return this.firstName + " " + this.lastName;
    },
    // アロー関数
    fullName2: () => {
        return this.firstName + " " + this.lastName;
    }
}

console.log(taroYamada.fullName1()) // Taro Yamada
console.log(taroYamada.fullName2()) // undefined undefined


const taroYamada2 = {
    firstName: "Taro",
    lastName: "Yamada",
    fullName: () => {
        return taroYamada2.firstName + " " + taroYamada2.lastName;
    }
}
console.log(taroYamada2) // Taro Yamada

// 関数の巻き上げをアローで表現
const main = () => {
    step1()
    step2()
    step3()
}
const step1 = () => { }
const step2 = () => { }
const step3 = () => { }
main()

// voidとundefinedの関係
function fn(): void { }
function fnU(): undefined { return }

// void は undefinedの上位型
const v: void = undefined; // undefined型は void 型に代入できる
const u: undefined = v; // void型 は undefined型に代入できない

// この特徴は、関数の誤用に気づくきっかけを与えてくれる
function f1(): void { }
function f2(): undefined { return }

let mayBeNumber: number | undefined;
mayBeNumber = f1(); // コンパイルで誤りに気づける！
mayBeNumber = f2(); // undefinedなので、誤りに気づけない。。

// 値渡し
// JavaScript は全て値渡し
function change(n: number) {
    n = 2;
}
let n1 = 1;
change(n1);
console.log(n1);

// オブジェクトは常に参照渡し
const x1 = { n: 1 };
let y = x1;
y.n = 2;
console.log(x) // nは2になっている
y = { n: 2 }// 別のオブジェクトを代入した場合は影響は無くなる
y.n = 3;
console.log(x1) // 2のまま

// 関数の場合注意が必要
function change2(y: { n: number }) {
    y.n = 2;
}
const x2 = { n: 1 };
change2(x2);
console.log(x2); // { n: 2} になっている

// オプション引数のあれこれ

function hello3(person: string = "anonymous") { // デフォルトの値を用意するなら、引数に代入するのが一般的
    return "Hello" + person
}

// T | undefined では引数なしで関数を呼べない
function hello4(person: string | undefined) { }
hello4() // 引数を一個は必要という警告が出る
hello4(undefined) // undefinedを代入しなければいけない

// オプション引数の後に、普通の引数は書けない
function func(foo?: string, bar: string) { }