import { useState } from 'react';
import { FaRobot, FaPaperPlane } from 'react-icons/fa';

const AIWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi! I'm your AI Assistant. Ask me about my skills, projects, or resume." },
  ]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a portfolio assistant for a software developer. Answer based on skills, projects, and resume.' },
            ...messages.map((msg) => ({
              role: msg.sender === 'user' ? 'user' : 'assistant',
              content: msg.text,
            })),
            { role: 'user', content: input },
          ],
        }),
      });

      const data = await res.json();
      const botReply = data.choices?.[0]?.message?.content || 'Sorry, something went wrong.';
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Error contacting AI.' }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-zinc-900 shadow-xl rounded-lg w-80 max-h-[70vh] flex flex-col overflow-hidden border dark:border-white/10">
          <div className="bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 font-semibold flex justify-between items-center">
            <span>AI Assistant</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div key={idx} className={`text-${msg.sender === 'user' ? 'right' : 'left'}`}>
                <p className={`inline-block px-3 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-indigo-100 dark:bg-indigo-700 text-black dark:text-white' : 'bg-gray-200 dark:bg-zinc-800 text-black dark:text-white'}`}>
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center border-t dark:border-zinc-700">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask something..."
              className="flex-1 px-4 py-2 bg-transparent focus:outline-none dark:text-white"
            />
            <button onClick={handleSend} className="px-4 py-2 text-indigo-600 dark:text-indigo-400">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white rounded-full flex items-center justify-center shadow-lg"
        >
          <FaRobot size={24} />
        </button>
      )}
    </div>
  );
};

export default AIWidget;
