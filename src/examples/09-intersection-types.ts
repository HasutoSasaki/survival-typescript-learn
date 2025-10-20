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

// インターセクション型を使いこなす

// === システム拡大に伴ってパラメーターが巨大化
// type Parameter = {
//     id: string;
//     index?: number;
//     active: boolean;
//     balance: number;
//     photo?: string;
//     age?: number;
//     surname: string;
//     givenName: string;
//     company?: string;
//     email: string;
//     phoneNumber?: string;
//     address?: string;
// }

type Mandatory = Required<{
    id: string;
    active: boolean;
    balance: number;
    surname: string;
    givenName: string;
    email: string;
}>

type Optional = Partial<{
    index: number;
    photo: string;
    age: number;
    company: string;
    phoneNumber: string;
    address: string;
}>

type Parameter = Mandatory & Optional

