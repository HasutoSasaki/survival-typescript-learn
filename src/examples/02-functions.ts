/**
 * 関数の型定義
 * 実行: npm run dev src/examples/02-functions.ts
 */

// 基本的な関数
function add(a: number, b: number): number {
  return a + b;
}

// アロー関数
const multiply = (a: number, b: number): number => a * b;

// オプショナル引数
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

// デフォルト引数
function divide(a: number, b: number = 1): number {
  return a / b;
}

// 可変長引数
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}

console.log("=== 関数の実行結果 ===");
console.log("add(5, 3):", add(5, 3));
console.log("multiply(4, 7):", multiply(4, 7));
console.log("greet('太郎'):", greet("太郎"));
console.log("greet('花子', 'こんにちは'):", greet("花子", "こんにちは"));
console.log("divide(10, 2):", divide(10, 2));
console.log("divide(10):", divide(10));
console.log("sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5));
