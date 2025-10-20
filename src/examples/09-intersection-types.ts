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