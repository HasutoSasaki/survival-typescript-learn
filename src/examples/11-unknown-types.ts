// unknownにはどんな型でも代入できる
let value: unknown;
value = 1;
value = "string";
value = { name: "オブジェクト" }

// unknown は「型安全なany型」と言われる
// anyだと具体的な型への代入ができてしまう
const value2: any = 10;
const int: number = value2;
const bool2: boolean = value2;

// 一方unknownは具体的な型へは代入できない
const value3: unknown = 10;
const int2: number = value3;
const bool3: boolean = value3;

// プロパティへのアクセス、メソッドも呼べない
value3.toFixed();
const obj7: unknown = { name: "オブジェクト" }
obj7.name;
