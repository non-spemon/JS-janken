document.getElementById("goo").addEventListener("click", function(){
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


/*function play(playChoice) {
    const emojiMap = {
        'goo': '✊',
        'choki': '✌️',
        'pa': '🖐️'
    };

    const choices = ['✊', '✌️', '🖐️'];
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)];

    let myHand = emojiMap[playChoice];
    let resultText = `あなた: ${playChoice} vs CPU: ${cpuChoice}<br>`;

    // 勝敗判定や結果表示などの処理を記述...

} // 修正2: 関数の閉じ括弧が必要
*/