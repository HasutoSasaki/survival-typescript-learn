
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