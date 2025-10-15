// 配列に安全にアクセスする方法
// noUncheckedIndexedAccessをtrueにしたとき、配列は常にundefinedの可能性がある

const abc: string[] = ["a", "b", "c"]
const character = abc[0]

// character.toUpperCase();　コンパイルエラー
if (typeof character === "string") { // 型チェックを行うことで回避
    character.toUpperCase()
}