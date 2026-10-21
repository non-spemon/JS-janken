// コンピューターの手の配列定義
// 0=グー, 1=チョキ, 2=パー
const cpu_hands =[
    {id:goo, emoji:✊},
    {id:choki, emoji:✌️},
    {id:pa, emoji:🖐️}
];

// 結果メッセージ
const RESULT =["あいこ！","勝ち！","負け！"];

//PCの手乱数処理
function playJanken(playerHands){
    const cpuHands = Math.floor(Math.random()*3);
}

// cpuの手表示
document.getElementById("cpu_hands").textContent = HANDS[cpuHands].emoji;


// 勝敗判定の計算: (自分の手 - 相手の手 + 3) % 3
// // 例：自分=グー(0), CPU=チョキ(1) -> (0 - 1 + 3) % 3 = 2 -> 「勝ち！」
const resultIndex = (playerHands - cpuHands +3) % 3;

//結果表示
document.getElementById("result").textContent =RESULT[resultIndex];

// 各ボタンにイベントリスナー一括登録
HANDS.forEach(hand. index) => {
    const button = document.getElementsByClassName(hands)

    if(button){
        button.addEventListener("click", () => playJanken(index));
    }
}



/*document.getElementById("goo").addEventListener("click", function(){
    const r = Math.floor(Math.random()*3 );
    if(r == 0){
        document.getElementById("cpu-hands").textContent = "✊";
        document.getElementById("result").textContent = "あいこ！";
    }else if (r == 1){
        document.getElementById("cpu-hands").textContent = "✌️";
        document.getElementById("result").textContent = "勝ち！";
    }else {
        document.getElementById("cpu-hands").textContent = "🖐️";
        document.getElementById("result").textContent = "負け";
    }
});

document.getElementById("choki").addEventListener("click", function(){
    const r = Math.floor(Math.random()*3 );
    if(r == 0){
        document.getElementById("cpu-hands").textContent = "✊";
        document.getElementById("result").textContent = "負け！";
    }else if (r == 1){
        document.getElementById("cpu-hands").textContent = "✌️";
        document.getElementById("result").textContent = "あいこ！";
    }else {
        document.getElementById("cpu-hands").textContent = "🖐️";
        document.getElementById("result").textContent = "勝ち！";
    }
});

document.getElementById("pa").addEventListener("click", function(){
    const r = Math.floor(Math.random()*3 );
    if(r == 0){
        document.getElementById("cpu-hands").textContent = "✊";
        document.getElementById("result").textContent = "勝ち";
    }else if (r == 1){
        document.getElementById("cpu-hands").textContent = "✌️";
        document.getElementById("result").textContent = "負け！";
    }else {
        document.getElementById("cpu-hands").textContent = "🖐️";
        document.getElementById("result").textContent = "あいこ！";
    }
});

*/