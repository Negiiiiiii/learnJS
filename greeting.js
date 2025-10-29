// ユーザ情報
const person = {
    name: "優太",
    age: 30,
    job: "sales",
    city: "Asagaya",
    gender: "male",
    favoritFood: ["sushi", "yakiniku","ramen"],
    calorieInfo: {
        target: 2000,
        actual: 4000
    }
}


// 現在時刻取得
const now = new Date();
//console.log(now.getHours());

function random(message) {
    const randomIndex = Math.floor(Math.random() * message.length)
    return message[randomIndex]
}

// 時間帯ごとの挨拶出し分け関数
function getGreetMessage (hour) {
    if (hour >= 4 && hour <= 10){
        const message = [
            "おはよう",
            "いい朝だね",
            "よく寝れた？"
        ];
        return random(message);
    }
    else if (hour >= 11 && hour <= 16){
        const message = [
            "こんにちは",
            "昼ごはん食べた？",
            "元気に頑張ろう！"
        ];
        return random(message);
    }

    else if (hour >= 17 || hour <= 3){
        const message = [
            "こんばんは",
            "素敵な夜だね",
            "おつかれさま"
        ];
        return random(message);
    }
}


//健康状態についてのコメント
function getHealthComment(actual, target) {
    const ratio = (actual / target) * 100;
    if (ratio < 60){
        const message = [
            "栄養が足りないよ〜💦 しっかり食べよう！",
            "エネルギー不足かも…ごはん食べて元気出そ🐧",
            "お腹空いてない？もう少し食べた方がいいよ！"
        ]
        return random(message);
    }
    else if (ratio >= 60 && ratio < 80){
        const message = [
            "あともう少し食べた方がいいかも🍚",
            "ちょっと少なめだね💦 おやつ食べる？",
            "エネルギーチャージ、あと一歩！"
        ]
        return random(message);
    }
    else if (ratio >= 80 && ratio < 120){
        const message = [
            "完璧なバランス✨ この調子！",
            "いい感じ〜！健康的だね🐧",
            "ばっちり！今日もよく食べたね💪"
        ]
        return random(message);
    }
    else if (ratio >= 120 && ratio < 150){
        const message = [
            "ちょっと食べ過ぎちゃったかも💦",
            "お腹いっぱい〜！少し休憩しよ🐧",
            "満腹！明日は少し控えめにしよっか？"
        ]
        return random(message);
    }
    else if (ratio >= 150){
        const message = [
            "うぅ…お腹パンパンだよ〜😵",
            "食べ過ぎちゃった💦 次は気をつけよう！",
            "胃がびっくりしてる〜🐧 水分とってね！"
        ]
        return random(message);
    }
}


//名前付きあいさつ文
function greet (name = "ゲスト"){
    return getGreetMessage(now.getHours())
    + name
    + "さん。"
    + getHealthComment(person.calorieInfo.actual, person.calorieInfo.target);
}
console.log (greet(person.name))
