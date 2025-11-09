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