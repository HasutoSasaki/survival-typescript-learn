// 配列に安全にアクセスする方法
// noUncheckedIndexedAccessをtrueにしたとき、配列は常にundefinedの可能性がある

const abc: string[] = ["a", "b", "c"]
const character = abc[0]

// character.toUpperCase();　コンパイルエラー
if (typeof character === "string") { // 型チェックを行うことで回避
    character.toUpperCase()
}

// 読み込み専用配列
const readonlyNumbers: readonly number[] = [1, 2, 3]
// readonlyNumbers.push(1) pushは存在しないとエラーになる

// 破壊的操作を安全に使う方法
const original = [1, 2, 3]
const copy = [...original].reverse()
console.log(original)
console.log(copy)

// スプレッド構文では、深いコピーまでは防げない
const arr = [1, [2, 3]]
const backup = [...arr]
if (Array.isArray(arr[1])) {
    arr[1].push(4)
    console.log(arr[1])
    console.log(backup[1])
}

// concatを使った解決策
const arr2 = [1, 2, 3]
const backup2 = arr2.concat()
arr2.push(4)
console.log(arr2)
console.log(backup2)