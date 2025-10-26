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


