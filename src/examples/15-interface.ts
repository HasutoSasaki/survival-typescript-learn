// === インターフェース ===

// interface は複数指定することができます
interface Human {
    name: string
    think(): void
}
interface Programmer {
    writeCode(): void
}

class Developer implements Human, Programmer {
    name: string = "Bob"

    think(): void {
        console.log("どういう実装にしようかな〜")
    }

    writeCode(): void {
        console.log("カタカタ")
    }
}