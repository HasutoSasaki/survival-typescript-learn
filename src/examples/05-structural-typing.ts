// classの構造が同じならコンパイルエラーにならない
class Person {
    walk() { }
}

class Dog {
    walk() { }
}

const person = new Person()
const dog: Dog = person

// 構造的型付けから名前的型付けにする方法
class UserId {
    private id: string

    constructor(id: string) {
        this.id = id
    }

    getId(): string {
        return this.id
    }
}

class ProductId {
    private id: string

    constructor(id: string) {
        this.id = id
    }

    getId(): string {
        return this.id
    }
}

const userId: UserId = new UserId("1")
// const productId: ProductId = userId 代入エラーになる