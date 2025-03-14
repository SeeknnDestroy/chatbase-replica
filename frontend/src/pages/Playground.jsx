import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Playground = () => {
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      content: 'Merhaba, size nasıl yardımcı olabilirim?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  
  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message to chat
    const userMessage = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInputMessage('');
    
    try {
      // In a real implementation, this would call your API
      // For now, we'll simulate a response after a short delay
      setTimeout(() => {
        const botResponse = {
          role: 'assistant',
          content: 'Bu bir test yanıtıdır. Gerçek API entegrasyonu yapılacak.',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar activeTab="playground" />
      
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            Playground
            <svg className="ml-2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </h1>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium">
            Compare
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex h-[600px] flex-col">
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="flex justify-center mb-4">
                <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  Neva Yalı Konut Uzmanı
                </div>
              </div>
              
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.role === 'user' 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 p-4">
              <form onSubmit={handleSendMessage} className="flex items-center">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Message..."
                  className="flex-1 border-0 focus:ring-0 outline-none"
                />
                <button 
                  type="submit"
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-center text-xs text-gray-500">
          Powered By Chatbase.co
        </div>
      </main>
    </div>
  );
};

export default Playground; 