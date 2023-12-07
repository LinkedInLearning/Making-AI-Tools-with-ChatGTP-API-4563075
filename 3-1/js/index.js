function getWeatherInfo(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.current_weather) {
            const weatherData = data.current_weather;
            const weatherMessage = `現在の天気: 温度 ${weatherData.temperature}度, 風速 ${weatherData.windspeed}km/h`;
            addMessageToChat(weatherMessage);
        } else {
            addMessageToChat("天気情報を取得できませんでした。");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        addMessageToChat("天気情報の取得中にエラーが発生しました。");
    });
}


function sendMessage() {
    const inputBox = document.getElementById('input-box');
    const message = inputBox.value;
    inputBox.value = '';

    // メッセージをチャットボックスに追加
    addMessageToChat('You: ' + message);

    // 天気情報のリクエストをチェック
    if (message.includes("天気")) {
        // 例として東京の座標を使用
        getWeatherInfo(35.6895, 139.6917);
    } else {
        // OpenAI APIへのリクエストを実行
        fetch('https://api.openai.com/v1/chat/completions', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer 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",
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{ role: "user", content: message }],
                stream: true,
            }),
        })
        .then(response => response.json())
        .then(data => {
            // AIのレスポンスをチャットボックスに追加
            addMessageToChat('AI: ' + data.choices[0].message.content);
        })
        .catch(error => {
            console.error('Error:', error);
            addMessageToChat('Error: AI response error');
        });
    }
}

function addMessageToChat(message) {
    const chatContainer = document.getElementById('chat-container');
    const newMessageDiv = document.createElement('div');
    newMessageDiv.textContent = message;
    chatContainer.appendChild(newMessageDiv);

    // スクロールを最下部に移動
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

