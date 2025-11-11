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