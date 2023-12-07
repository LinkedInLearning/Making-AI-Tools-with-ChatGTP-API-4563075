function getWeatherInfo(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.current_weather) {
            const weatherData = data.current_weather;
            const weatherMessage = `AI: 現在の天気: 温度 ${weatherData.temperature}度, 風速 ${weatherData.windspeed}km/h`;
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

function fetchOpenAIStream(message) {
    fetch('https://api.openai.com/v1/chat/completions', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ここにAPIを記入",
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: message }],
            stream: true,
        }),
    })
    .then(response => {
        const reader = response.body.getReader();
        let accumulatedText = "AI:";
        return new ReadableStream({
            start(controller) {
                function push() {
                    reader.read().then(({ done, value }) => {
                        if (done) {
                            controller.close();
                            return;
                        }
                        const textDecoder = new TextDecoder();
                        const decodedData = textDecoder.decode(value, {stream: true});

                        // レスポンスからJSON部分を抽出し、テキストを蓄積
                        const regex = /data: (.+)/g;
                        let match;
                        while (match = regex.exec(decodedData)) {
                            try {
                                const jsonData = JSON.parse(match[1]);
                                const content = jsonData.choices[0].delta.content;
                                if (content) {
                                    accumulatedText += content.replace(/\n/g, ""); // 改行を除去して連結
                                }
                            } catch (error) {
                                console.error('Error parsing JSON:', error);
                            }
                        }

                        // 完全なメッセージをチャットボックスに追加
                        if (accumulatedText.trim()) {
                            addMessageToChat(accumulatedText.trim());
                            accumulatedText = "";
                        }

                        push();
                    });
                }
                push();
            }
        });
    })
    .catch(error => {
        console.error('Error:', error);
        addMessageToChat('Error: AI response error');
    });
}

function sendMessage() {
    const inputBox = document.getElementById('input-box');
    const message = inputBox.value;
    inputBox.value = '';

    addMessageToChat('You: ' + message);

    if (message.includes("天気")) {
        getWeatherInfo(35.6895, 139.6917);
    } else {
        fetchOpenAIStream(message);
    }
}

function addMessageToChat(message) {
    const chatContainer = document.getElementById('chat-container');

    // 新しいメッセージが 'You: ' または 'AI: ' で始まる場合、新しい <p> タグを作成
    if (message.startsWith('You: ') || message.startsWith("AI:")) {
        const newMessageP = document.createElement('div');
        newMessageP.textContent = message;
        chatContainer.appendChild(newMessageP);
    } else {
        // それ以外の場合、最後の <p> タグにメッセージを追加
        let lastMessageP = chatContainer.querySelector('div:last-child');
        if (!lastMessageP) {
            lastMessageP = document.createElement('div');
            chatContainer.appendChild(lastMessageP);
        }
        // メッセージを追加
        lastMessageP.textContent += message;
    }

    // スクロールを最下部に移動
    chatContainer.scrollTop = chatContainer.scrollHeight;
}


