import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

const Chatbot = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { text: t('chatBot.message'), sender: 'bot' }
    ]);
    const [userInput, setUserInput] = useState('');

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = () => {
        if (userInput.trim() === '') return;

        // Add user message
        setMessages([...messages, { text: userInput, sender: 'user' }]);

        // Simulate bot response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                text: t('Ən yaxın zamanda uyğun cavab veriləcək....💚'),
                sender: 'bot'
            }]);
        }, 1000);

        setUserInput('');
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="fixed bottom-5 right-5 flex flex-col items-end z-50">
            {isOpen && (
                <div className="bg-white rounded-lg shadow-lg mb-4 w-80 max-h-96 flex flex-col">
                    <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                                <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-600" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v7h-2zm0 8h2v2h-2z" />
                                </svg>
                            </div>
                            <span className="font-bold text-lg">SiNA</span>
                        </div>
                        <button onClick={toggleChatbot} className="text-white hover:text-gray-200">
                            <svg className="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="p-3 overflow-y-auto flex-1 bg-gray-100 h-64">
                        <div className="flex flex-col space-y-3">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-3/4 p-3 rounded-lg ${msg.sender === 'user'
                                        ? 'bg-blue-600 text-white rounded-br-none'
                                        : 'bg-white text-gray-800 shadow rounded-bl-none'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-3 border-t border-gray-200 flex">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder={t('chatBot.contactUs')}
                        />
                        <button
                            onClick={handleSendMessage}
                            className=" bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
                        >
                            <svg className="w-5 h-5 rotate-90 " fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            <button
                onClick={toggleChatbot}
                className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default Chatbot;