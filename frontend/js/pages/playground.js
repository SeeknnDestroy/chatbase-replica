// Handle chat functionality
function initChatFunctionality() {
  const chatForm = document.getElementById('chat-form');
  const messageInput = document.getElementById('message-input');
  const chatMessages = document.getElementById('chat-messages');
  
  chatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const message = messageInput.value.trim();
    if (!message) return;
    
    // Add user message
    addMessage('user', message);
    
    // Clear input
    messageInput.value = '';
    
    // Simulate bot response (replace with actual API call later)
    setTimeout(() => {
      addMessage('assistant', 'Bu bir test yanıtıdır. Gerçek API entegrasyonu yapılacak.');
    }, 1000);
  });
  
  function addMessage(role, content) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'} mt-4`;
    
    const messageContent = document.createElement('div');
    messageContent.className = role === 'user' ? 'user-message' : 'bot-message';
    messageContent.textContent = content;
    
    messageDiv.appendChild(messageContent);
    chatMessages.querySelector('.space-y-4').appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

document.addEventListener('DOMContentLoaded', initChatFunctionality); 