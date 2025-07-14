const chatLog = document.getElementById('chat-log');
const messageInput = document.getElementById('messageInput');

// Load starter fake logs
fetch('assets/fake-logs.json')
  .then(response => response.json())
  .then(data => {  
    data.messages.forEach(msg => {
      appendMessage(msg, false);  // show preloaded logs
    });
  })
  .catch(() => appendMessage("Welcome to the chatroom!", false));

// Predefined fake users
const fakeUsers = ["Alice", "Bob", "Charlie", "Eve", "Mallory"];

// Predefined fake replies
const fakeReplies = [
  "Interesting point!",
  "I totally agree with that.",
  "Hmm, that's suspicious.",
  "What do you think about the DNS logs?",
  "Let's escalate this one.",
  "Nice catch!",
  "Did you report that to the triage team?",
  "Haha, good one 😂"
];

// Send your message
function sendMessage() {
  const msg = messageInput.value.trim();
  if (msg !== '') {
    appendMessage("You: " + msg, true);
    messageInput.value = '';
    simulateReply();  // triggers fake reply
  }
}

// Add message to chat window
function appendMessage(msg, isUser) {
  const div = document.createElement('div');
  div.className = 'chat-message' + (isUser ? ' you' : '');
  div.textContent = msg;
  chatLog.appendChild(div);
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Simulate reply from random fake user
function simulateReply() {
  const delay = Math.random() * 2000 + 1000; // 1–3 sec
  setTimeout(() => {
    const user = fakeUsers[Math.floor(Math.random() * fakeUsers.length)];
    const reply = fakeReplies[Math.floor(Math.random() * fakeReplies.length)];
    appendMessage(`${user}: ${reply}`, false);
  }, delay);
}
