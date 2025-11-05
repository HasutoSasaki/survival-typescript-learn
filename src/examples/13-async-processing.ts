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

// コールバック内で例外を投げるとそのPromiseは拒否されます。
Promise.resolve(1)
    .then(() => {
        throw new Error();
    })
    .then(() => {
        console.log('fulilled');
    })
    .catch(() => {
        console.log("rejected")
    })

Promise.resolve(1)
    .then(() => {
        return Promise.reject(new Error())
    })
    .then(() => {
        console.log("fulilled")
    })
    .catch(() => {
        console.log("rejected")
    })

const promise3: Promise<number> = Promise.reject(new Error())
const promise4: Promise<string> = promise3.catch((e) => e.message)