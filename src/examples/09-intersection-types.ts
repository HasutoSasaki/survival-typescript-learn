// インターセクション型の例
type TwoDimensionalPoint = {
    x: number;
    y: number;
}

type Z = {
    z: number
}

type ThreeDimensionalPoint = TwoDimensionalPoint & Z;

const p: ThreeDimensionalPoint = {
    x: 0,
    y: 1,
    z: 2
}

// プリミティブ型のインターセクション型
type Never = string & number;

const n: Never = "2"; // never：いかなる値も代入できない