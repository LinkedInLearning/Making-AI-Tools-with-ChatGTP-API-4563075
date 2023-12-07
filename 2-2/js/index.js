function sendMessage() {
    const inputBox = document.getElementById('input-box');
    const message = inputBox.value;
    inputBox.value = '';

    // メッセージをチャットボックスに追加
    addMessageToChat('You: ' + message);

    // OpenAI APIへのリクエストを作成
    fetch('https://api.openai.com/v1/chat/completions', {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer ",
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: message }],
        }),
    })
    .then(response => response.json())
    .then(data => {
        // AIのレスポンスをチャットボックスに追加
        addMessageToChat('AI: ' + data.choices[0].message.content);
    })
    .catch(error => console.error('Error:', error));
}

function addMessageToChat(message) {
    const chatContainer = document.getElementById('chat-container');
    const newMessageDiv = document.createElement('div');
    newMessageDiv.textContent = message;
    chatContainer.appendChild(newMessageDiv);

    // スクロールを最下部に移動
    chatContainer.scrollTop = chatContainer.scrollHeight;
}
