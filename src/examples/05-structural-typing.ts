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

console.log("=== Class-based nominal typing ===");
console.log("userId:", userId.getId());

// =======================================
// ブランド型（名前を変えて衝突を回避）
// =======================================

type BrandedUserId = {
    __brand: "UserId"
    id: number
}

type BrandedProductId = {
    __brand: "ProductId"
    id: number
}

const brandedUserId = { id: 1 } as BrandedUserId;
// const brandedProductId: BrandedProductId = brandedUserId; // エラー: 型が互換性がない

console.log("\n=== Brand type pattern ===");
console.log("brandedUserId:", brandedUserId);