/**
 * InterfaceとType
 * 実行: npm run dev src/examples/03-interface-type.ts
 */

// Interface
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // オプショナル
}

const user1: User = {
  id: 1,
  name: "太郎",
  email: "taro@example.com",
  age: 25,
};

// Type Alias
type Product = {
  id: number;
  name: string;
  price: number;
};

const product1: Product = {
  id: 101,
  name: "ノートPC",
  price: 120000,
};

// Union型
type Status = "pending" | "approved" | "rejected";

const orderStatus: Status = "pending";

// Intersection型
type Admin = User & {
  role: "admin";
  permissions: string[];
};

const admin: Admin = {
  id: 2,
  name: "管理者",
  email: "admin@example.com",
  role: "admin",
  permissions: ["read", "write", "delete"],
};

console.log("=== User ===");
console.log(user1);

console.log("\n=== Product ===");
console.log(product1);

console.log("\n=== Status ===");
console.log({ orderStatus });

console.log("\n=== Admin ===");
console.log(admin);
