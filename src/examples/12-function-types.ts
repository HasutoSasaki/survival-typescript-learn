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

// デフォルト引数
function foo2(x = 1) { console.log(x) }
foo2(undefined) // 1が出力される。デフォルト引数は、undefinedの際に適用されるため
foo2(null) // そもそも型エラーは出るが、nullは出力される

// 初期化処理もかけたりする
function foo3(x = 2 * 2) { }
function foo4(x = parseInt("1.5")) { }
// 非同期処理は書けない
async function foo5(x = await Promise.resolve(1)) { }

// 残余引数/可変長引数（rest parameter)
function func3(...params: number[]) { console.log(params) }
function func4(param1: number, ...params: number[]) { console.log(param1, params) }
// 例えば組み込みでは、Math.maxとかがある
const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const highest = Math.max(...scores)

// 色々な分割代入
function foo6({ a, b }: Record<string, number>) {
    console.log(a, b) // 1, 2
}
foo6({ a: 1, b: 2 })

function foo7({ a: x, b: y }: Record<string, number>) {
    console.log(x, y) // 1, 2
}
foo7({ a: 1, b: 2 })

function bar([a, b]: number[]) {
    console.log(a, b)
}
bar([1, 2, 3]) // 1,2

// 分割代入のデフォルト引数
function foo8({ a = 0 }) {
    console.log(a)
}
function bar2([a = 0]) {
    console.log(a)
}
// 分割代入引数の全体の既定値
function foo9({ a, b } = { a: 0, b: 0 }) {
    console.log(a, b)
}
function bar3([a, b] = [0, 0]) {
    console.log(a, b)
}

// 既定値は型注釈の後に記載する
function foo10({ a }: { a?: number } = { a: 0 }) { }

// 各プロパティの既定値と、引数全体の既定値。両方を指定することもできます。
type Obj = { a?: number, b?: number }
function foo11({ a = 0, b = 0 }: Obj = {}) {
    console.log(a + b)
}
// 引数全体を省略すると各プロパティの既定値が使用されます。
foo11() // 0
foo11({}) // 0
foo11({ a: 1 }) // 1
foo11({ a: 1, b: 2 }) // 3

// options object pattern
// 位置引数の関数
function normalFunc(x: number, y: number, z: number) {
    console.log(x, y, z)
}

// オブジェクト一つだけを引数に持つ関数
function func5(options: { x: number, y: number, z: number }) {
    console.log(options.x, options.y, options.z)
}
func5({ x: 1, y: 2, z: 3 })

// 分割代入を使うともっとシンプルになる
function func6({ x, y, z }: { x: number, y: number, z: number }) {
    console.log(x, y, z)
}