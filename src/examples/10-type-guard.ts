//制御フロー分析
function showMonth(month: string | number) {
    if (typeof month === "string") {
        console.log(month.padStart(2, "0"));
        return
    }
    console.log(month.toFixed) // 早期リターンをすることで、number型に絞られる
}

// typeof
function getMonth(date: string | Date | null) {
    if (typeof date === "object" && date != null) {
        console.log(date.getMonth() + 1)
    }
}

// instanceof
function getMonth2(date: string | Date) {
    // 特定クラスのインスタンスであることを判定したい場合は、instanceof
    if (date instanceof Date) {
        console.log(date.getMonth() + 1);
    }
}

// in
interface Wizard {
    castMagic(): void
}
interface Swordsman {
    slashSword(): void
}

function attack(player: Wizard | Swordsman) {
    if ("castMagic" in player) {
        player.castMagic();
    } else {
        player.slashSword();
    }
}

// ユーザー定義の型ガード関数
type Player = Wizard | Swordsman

function isWizard(player: Player): player is Wizard {
    return "castMagic" in player;
}

function attack2(player: Wizard | Swordsman) {
    if (isWizard(player)) {
        player.castMagic();
    } else {
        player.slashSword();
    }
}