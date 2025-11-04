// ==== async processing ====

// Promise と ジェネリクス
type User2 = {
    name: string;
    age: number
}

function getUser(): Promise<User2> {
    return new Promise((resolve) => {
        const user: User2 = {
            name: "太郎",
            age: 10
        };
        resolve(user)
    })
}

getUser().then((user: User2) => {
    console.log(user)
})

// コールバックの戻り値として、S型または Promise<S> 型の値を返すと Promise<S> 型を返します
const promise1: Promise<number> = Promise.resolve(1);
const promise2: Promise<string> = promise1.then((value) => `${value}`);

// Promise.prototype.then() メソッドチェーンができる
const promise: Promise<boolean> = Promise.resolve("1")
    .then((value) => Number(value)) // Promise<number> 型になる
    .then((value) => value > 0) 