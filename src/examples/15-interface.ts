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

// インターフェースのreadonly 修飾子
interface SomeInterface {
    readonly field: number;
}

// インターフェースの継承
interface Person2 {
    name: string;
    age: number;
}
interface Student extends Person2 {
    grade: number; // 学年
}

interface Teacher extends Person2 {
    students: Student[]; //生徒
}

const studentA: Student = {
    name: "花子",
    age: 10,
    grade: 3
}

const teacher: Teacher = {
    name: "太郎",
    age: 30,
    students: [studentA]
}

// プロパティを部分型に宣言しおなす
// リテラル型に変更
interface WebPage {
    path: string
}

interface IndexPage extends WebPage {
    path: "/";
}

// ユニオン型
interface Person3 {
    age: number | undefined
}
interface Student2 extends Person3 {
    age: number;
}