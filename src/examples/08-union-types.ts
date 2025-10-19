// 通常のユニオンは絞り込みが複雑になる
type UploadStatus = InProgress | Success | Failure;
type InProgress = { done: boolean, progress: number }
type Success = { done: boolean }
type Failure = { done: boolean; error: Error }

function printStatus(status: UploadStatus) {
    if (status.done) {
        if ("error" in status) {
            console.log(`アップロード失敗：${status.error.message}`)
        } else {
            console.log("アップロード成功")
        }
    } else if ("progress" in status) {
        console.log(`アップロード中：${status.progress}%`)
    }
}

// 判別可能なユニオン型：ディスクリミネータ
type UploadStatus2 = InProgress2 | Success2 | Failure2
type InProgress2 = { type: "InProgress"; progress: number }
type Success2 = { type: "Success" }
type Failure2 = { type: "Failure"; error: Error }

function printStatus2(status: UploadStatus2) {
    if (status.type === "InProgress") {
        console.log(`アップロード中：${status.progress}%`)
    } else if (status.type === "Success") {
        console.log("アップロード成功", status)
    } else if (status.type === "Failure") {
        console.log(`アップロード失敗：${status.error.message}`);
    } else {
        console.log("不正なステータス：", status)
    }
}


// 数値リテラル型のディスクリミネータ
type OkOrBadRequest =
    | { statusCode: 200; value: string }
    | { statusCode: 400; message: string }

function handleResponse(x: OkOrBadRequest) {
    if (x.statusCode === 200) {
        console.log(x.value);
    } else {
        console.log(x.message)
    }
}

// 論理型リテラル型のディスクリミネータ
type OkOrNotOk =
    | { isOk: true; value: string }
    | { isOk: false; error: string }

function handleStatus(x: OkOrNotOk) {
    if (x.isOk) {
        console.log(x.value)
    } else {
        console.log(x.error)
    }
}

type ResultNull =
    | { error: null; value: string }
    | { error: Error }

function handleResultNull(result: ResultNull) {
    if (result.error === null) {
        console.log(result.value)
    } else {
        console.log(result.error)
    }
}

type ResultUndefined =
    | { error: undefined; value: string }
    | { error: Error }

function handleResultUndefined(result: ResultUndefined) {
    if (result.error) {
        console.log(result.error)
    } else {
        console.log(result.value)
    }
}