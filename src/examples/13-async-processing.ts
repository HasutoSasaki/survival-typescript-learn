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

function request1(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 4000);
    });
}

function request2(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    });
}

function request3(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(3);
        }, 1000);
    });
}

Promise.all([request1(), request2(), request3()]).then(([num1, num2, num3]) => {
    console.log(num1, num2, num3);
});

function request4(): Promise<number> {
    return new Promise((_resolve, reject) => {
        setTimeout(() => {
            reject(new Error("failed1"));
        }, 4000);
    });
}

function request5(): Promise<number> {
    return new Promise((_resolve, reject) => {
        setTimeout(() => {
            reject(new Error("failed2"));
        }, 2000);
    });
}

function request6(): Promise<number> {
    return new Promise((_resolve, reject) => {
        setTimeout(() => {
            reject(new Error("failed3"));
        }, 1000);
    });
}

Promise.all([request4(), request5(), request6()])
    .then(([num1, num2, num3]) => {
        console.log(num1, num2, num3);
    })
    .catch((e) => {
        // 最も早く終わった例外が返る
        console.log(e.message);
    });



// Promise.allSettled 
// 履行/拒否に関わらず全て待ち受ける
function request7(): Promise<number> {
    return Promise.resolve(1)
}

function request8(): Promise<number> {
    return Promise.reject(new Error("failed"))
}

Promise.allSettled([request7(), request8()]).then((values) => {
    console.log(values)
})

// Promise.race
// 一番初めに決定された Promise を返す
function request9(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1)
        }, 4000)
    })
}

function request10(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2)
        }, 2000)
    })
}

function request11(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(3)
        }, 1000)
    })
}

Promise.race([request9(), request10(), request11()]).then((num) => {
    console.log(num) // @log: 3
})

// async関数の宣言
async function requestAsync1(): Promise<number> {
    return 1
}

const requestAsync2 = async function (): Promise<number> {
    return 1
}

const requestAsync3 = async (): Promise<number> => {
    return 1
}

// async メソッドとアクセス修飾子
interface User3 {
    id: string,
    name: string,
    age: number
}
async function findById(id: string): Promise<Omit<User3, "id">> {
    return {
        name: '',
        age: 0
    }
}
class UserRepository {
    public async find(id: string): Promise<User3> {
        const { name, age } = await findById(id);

        return {
            id, name, age
        }
    }
}

// await の注意点
// awaitは基本的にasync関数の中でしか使えません
function request12(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello')
        }, 1000)
    })
}
// この書き方はできない
// const result = await request12();
// console.log(result)

async function main() {
    const result = await request12()
    console.log(result) // @log: "Hello"
}
main();

// Promiseを直接awaitする
async function main2() {
    await new Promise((resolve) => {
        setTimeout(() => resolve, 1000)
    })
}

// await した時の型注釈
async function request14(): Promise<string> {
    return "hello"
}

async function main3() {
    // stringになる
    const result = await request14();
    console.log(result) // @log: "hello"
}

// then-catch を try-catch に書き換える
async function request15(): Promise<string> {
    return "hello"
}

function main4() {
    request15()
        .then((result) => {
            console.log(result) //@log: hello
        })
        .catch((error) => {
            console.log(error)
        })
}
async function main5() {
    try {
        const result = await request15()
        console.log(result)// @log: hello
    } catch (error: unknown) {
        console.log(error)
    }
}