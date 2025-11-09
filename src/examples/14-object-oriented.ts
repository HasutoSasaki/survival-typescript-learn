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