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