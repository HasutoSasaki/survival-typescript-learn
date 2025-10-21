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