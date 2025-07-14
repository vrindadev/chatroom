const chatLog = document.getElementById('chat-log');
const messageInput = document.getElementById('messageInput');

// Load fake logs from JSON file
fetch('assets/fake-logs.json')
  .then(response => response.json())
  .then(data => {
    data.messages.forEach(msg => {
      appendMessage(msg, false);
    });
  })
  .catch(err => console.error("Error loading fake logs:", err));

function sendMessage() {
  const msg = messageInput.value.trim();
  if (msg !== '') {
    appendMessage(msg, true);
    messageInput.value = '';
  }
}

function appendMessage(msg, isUser) {
  const div = document.createElement('div');
  div.className = 'chat-message' + (isUser ? ' you' : '');
  div.textContent = (isUser ? "You: " : "User: ") + msg;
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
}
