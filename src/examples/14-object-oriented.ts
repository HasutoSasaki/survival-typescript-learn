// オブジェクト指向セクション
//  ==== class ====

// アクセス修飾子
// public: どこからでもアクセス可能。アクセス修飾子を省略した場合もpublicになる
class Animal {
    public name: string;

    public constructor(theName: string) {
        this.name = theName;
    }

    // メソッドにpublicアクセス修飾子
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}

const gorilla = new Animal("ゴリラ");
gorilla.move(10);
"ゴリラ moved 10m."
gorilla.name = "ゴリラゴリラ";
gorilla.move(20);

// protected
class Animal2 {
    public name: string;

    public constructor(theName: string) {
        this.name = theName;
    }

    // public から　protected に変更
    protected move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}

const cat = new Animal2("キャット")
cat.move(10)// プロパティ 'move' は保護されているため、クラス 'Animal2' とそのサブクラス内でのみアクセスできます。

// 十倍早く動くゴリラ
class Gorilla extends Animal2 {
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}

const fastGorilla = new Gorilla("速いゴリラ")
fastGorilla.move(10) // 速いゴリラ moved 100m.

// private
class Animal3 {
    public name: string;

    public constructor(theName: string) {
        this.name = theName;
    }

    // public から　private に変更
    private move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}

class Gorilla2 extends Animal3 {
    move(distanceInMeters: number) {
        super.move(distanceInMeters * 10) // private メソッドにはアクセスできいない
    }
}
// private メソッドの多くの使い方としては、クラス内の長いコードを機能別に分ける時に利用します。

// constructor shorthand
class ConstructorInAccessModifier {
    constructor(
        arg0: number,
        public arg1: number,
        protected arg2: number,
        private arg3: number
    ) {
        console.log({ arg0, arg1, arg2, arg3 })
    }
}

class ConstructorOutAccessModifier {
    public arg1: number;
    protected arg2: number;
    private arg3: number;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
        console.log({ arg0, arg1, arg2, arg3 })
    }
}

const InAccess = new ConstructorInAccessModifier(1, 2, 3, 4)
InAccess.arg0;
InAccess.arg1;
InAccess.arg2;
InAccess.arg3;

const outAccess = new ConstructorOutAccessModifier(1, 2, 3, 4)
outAccess.arg0
outAccess.arg1
outAccess.arg2
outAccess.arg3
// public のarg1のみアクセス可能です。どちらのクラスも同様
// つまり、コンストラクタの引数のアクセス修飾子はプロパティ宣言の省略をしてくれるだけにすぎません。

// static field
class SomeClass {
    static field: number = 123;
    static readonly readVal: number; // readonly修飾子をつけると読み取り専用になります
}
console.log(SomeClass.field) // @log: 123

// static method
class SomeClass2 {
    static doSomething() {
    }
    // アクセス修飾子を組み合わせられる
    private static privateMethod() {
    }
}
SomeClass2.doSomething()

// メソッド戻り値の this型とメソッドチェーン
// fluent interface

class Operator {
    protected value: number;

    public constructor(value: number) {
        this.value = value
        return this
    }

    public sum(value: number) {
        this.value += value
        return this
    }

    public subtract(value: number) {
        this.value -= value
        return this
    }

    public multiply(value: number) {
        this.value *= value
        return this
    }

    public divide(value: number) {
        this.value /= value
        return this
    }
}

class NewOperator extends Operator {
    public constructor(value: number) {
        super(value)
    }

    public power(value: number): this {
        this.value **= value
        return this
    }
}

const op: NewOperator = new NewOperator(2)
op.power(3).multiply(2).power(3) // 4096


// instanceof演算子
class ClassA { }
class ClassB { }
const a = new ClassA();
console.log(a instanceof ClassA); //true
console.log(a instanceof ClassB); //false

// 継承とinstanceof
class Parent { }
class Child extends Parent { }
const child = new Child();
console.log(child instanceof Parent); // true

// instanceofの反転
if (!(Parent instanceof ClassA)) {
    // Parent が ClassA ではないときの処理
}

// 抽象クラスと instanceof
abstract class AbstractClass { }
class ConcreteClass extends AbstractClass { }
const obj8 = new ConcreteClass();
console.log(obj8 instanceof AbstractClass)

// 公称型クラス
class UserId2 {
    private readonly id: string

    constructor(id: string) {
        this.id = id
    }
}

class GroupId {
    private readonly id: string;

    constructor(id: string) {
        this.id = id
    }
}

const userId2: UserId2 = new GroupId("...") // idプロパティがプライベートなため、相互代入は不可能となる
// この方法はフィールドに限らず、プライベートメソッドやprotectedプロパティでも同じ効果があります