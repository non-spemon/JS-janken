// コンピューターの手の配列定義 (0=グー, 1=チョキ, 2=パー)
const cpu_hands = [
    { id: "goo", emoji: "✊" },
    { id: "choki", emoji: "✌️" },
    { id: "pa", emoji: "🖐️" }
];

// 結果メッセージ
const RESULT = ["あいこ！", "勝ち！", "負け！"];

// じゃんけんどの一連の処理を行う関数
function playJanken(playerHands) {
    // 1. 0〜2の乱数を取得 (CPUの手)
    const cpuHands = Math.floor(Math.random() * 3);

    // 2. CPUの手を画面に表示
    document.getElementById("cpu_hands").textContent = "コンピューターの手は：" + cpu_hands[cpuHands].emoji;

    // 3. 勝敗判定の計算: (自分の手 - 相手の手 + 3) % 3
    const resultIndex = (playerHands - cpuHands + 3) % 3;

    // 4. 結果を画面に表示
    document.getElementById("result").textContent = RESULT[resultIndex];
}

// 5. 各ボタンにイベントリスナー一括登録
cpu_hands.forEach((hand, index) => {
    // 1つずつのボタン要素を取得する
    const button = document.getElementById(hand.id);

    // ボタンが存在していれば、クリックイベントを登録する
    if (button) {
        button.addEventListener("click", () => {
            playJanken(index); // クリックされたら何番目の手か(0, 1, 2)を関数に渡す
        });
    }
});