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