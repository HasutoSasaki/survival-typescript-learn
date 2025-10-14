/**
 * 基本的な型
 * 実行: npm run dev src/examples/01-basic-types.ts
 */

// プリミティブ型
const str: string = "Hello";
const num: number = 42;
const bool: boolean = true;

console.log("=== プリミティブ型 ===");
console.log({ str, num, bool });

// 配列
const numbers: number[] = [1, 2, 3, 4, 5];
const strings: Array<string> = ["a", "b", "c"];

console.log("\n=== 配列 ===");
console.log({ numbers, strings });

// オブジェクト
const user: { name: string; age: number } = {
  name: "太郎",
  age: 25,
};

console.log("\n=== オブジェクト ===");
console.log(user);

// タプル
const tuple: [string, number] = ["ID", 123];

console.log("\n=== タプル ===");
console.log(tuple);
