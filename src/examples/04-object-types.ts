
// readonly
let obj: {
    readonly foo: number
}
obj = { foo: 1 };
// obj.foo = 2; 読み取り専用なためコンパイルエラー


// readonlyは再帰的ではない
let obj2: {
    readonly foo: {
        bar: number
    }
}
obj2 = {
    foo: {
        bar: 1,
    }
}
// obj2.foo = { bar: 2 }; //コンパイルエラー
obj2.foo.bar = 2; // エラーにならない

// === 全てのプロパティをreadonlyにする
let obj3: {
    readonly foo: {
        readonly bar: number
    }
}

let obj4: Readonly<{
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
}>

// const と readonlyの違い
const x = { y: 1 }
// x = { c: 1 } 代入はできないけど
x.y = 2 // プロパティへの代入はできる

// readonly 
let obj5: { readonly x: number } = { x: 1 };
// obj5.x = 2; プロパティへの代入は禁止だが
obj5 = { x: 2 } // 代入はできる

// const & readonlyを使うと完全に代入を防げる
const obj6: { readonly x: number } = { x: 1 };
// obj6 = { x: 2 } 
// obj6.x = 2
