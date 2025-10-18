enum Position {
    Top,
    Right,
    Bottom,
    Left
}

// 列挙型のメンバーオブジェクトのプロパティは連番になる
console.log(Position.Top) // 0
console.log(Position.Right) // 1
console.log(Position.Bottom) // 2
console.log(Position.Left) // 3

// メンバーに値を代入する場合
// 続くメンバーが連番になる
enum Position2 {
    Top = 1, // 1
    Right, // 2
    Bottom, // 3
    Left // 4
}

// 列列挙の代替案
// 1: ユニオン型
type YesNo = "yes" | "no";

function toJapanese(yesno: YesNo) {
    switch (yesno) {
        case "yes":
            return "はい";
        case "no":
            return "いいえ"
    }
}

// ユニオン & シンボル
const yes = Symbol();
const no = Symbol();
type YesNo2 = typeof yes | typeof no;

function toJapanese2(yesno: YesNo2) {
    switch (yesno) {
        case yes:
            return "はい";
        case no:
            return "いいえ";
    }
}

// オブジェクトリテラル
const Position3 = {
    Top: 0,
    Right: 1,
    Bottom: 2,
    Left: 3,
} as const;

type Position3 = (typeof Position)[keyof typeof Position];

function toJapanese3(position: Position) {
    switch (position) {
        case Position.Top:
            return "上"
        case Position.Right:
            return "右"
        case Position.Bottom:
            return "下"
        case Position.Left:
            return "左"
    }
}