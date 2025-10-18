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