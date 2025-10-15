// classの構造が同じならコンパイルエラーにならない
class Person {
    walk() { }
}

class Dog {
    walk() { }
}

const person = new Person()
const dog: Dog = person

