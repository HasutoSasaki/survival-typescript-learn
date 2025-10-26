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

hello2(); // ❌

const hello2 = function () {
    console.log("Hello World");
}