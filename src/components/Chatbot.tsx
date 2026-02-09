import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { knowledgeBase, KnowledgeItem } from '@/data/knowledgeBase';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export const Chatbot: React.FC = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            text: "Hello! I'm Neurify's AI Assistant. How can I help you today?",
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const findAnswer = (query: string): string => {
        const lowercaseQuery = query.toLowerCase();

        const bestMatch = knowledgeBase.reduce((best, item) => {
            const matchCount = item.keywords.reduce((count, keyword) => {
                return lowercaseQuery.includes(keyword.toLowerCase()) ? count + 1 : count;
            }, 0);

            if (matchCount > best.maxMatches) {
                return { item, maxMatches: matchCount };
            }
            return best;
        }, { item: null as KnowledgeItem | null, maxMatches: 0 });

        if (bestMatch.item && bestMatch.maxMatches > 0) {
            return bestMatch.item.answer;
        }

        return "I'm not quite sure about that. Could you try rephrasing your question? You can ask about our services, mission, or contact details.";
    };

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI processing delay
        setTimeout(() => {
            const answer = findAnswer(userMessage.text);
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: answer,
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 1000 + Math.random() * 500);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-48 right-8 w-80 md:w-96 h-[500px] rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col border backdrop-blur-xl"
                        style={{
                            backgroundColor: theme === 'dark' ? 'rgba(10, 10, 10, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                            borderColor: theme === 'dark' ? 'rgba(0, 255, 255, 0.2)' : 'rgba(59, 130, 246, 0.2)',
                            boxShadow: theme === 'dark'
                                ? '0 0 30px rgba(0, 255, 255, 0.1)'
                                : '0 10px 40px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        {/* Header */}
                        <div
                            className="p-4 flex items-center justify-between border-b"
                            style={{
                                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                                background: theme === 'dark'
                                    ? 'linear-gradient(90deg, rgba(0, 255, 255, 0.1), rgba(168, 85, 247, 0.1))'
                                    : 'linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
                            }}
                        >
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <div className="w-2 h-2 absolute top-0 right-0 bg-green-500 rounded-full animate-pulse" />
                                    <Bot className="w-6 h-6" style={{ color: theme === 'dark' ? '#00ffff' : '#3b82f6' }} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm" style={{ color: theme === 'dark' ? '#fff' : '#1f2937' }}>Neurify Assistant</h3>
                                    <p className="text-xs opacity-70" style={{ color: theme === 'dark' ? '#ccc' : '#4b5563' }}>Online | AI Powered</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                                aria-label="Close chat"
                            >
                                <X className="w-5 h-5" style={{ color: theme === 'dark' ? '#fff' : '#1f2937' }} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                            ? 'rounded-tr-none'
                                            : 'rounded-tl-none'
                                            }`}
                                        style={{
                                            background: msg.sender === 'user'
                                                ? (theme === 'dark' ? '#00ffff' : '#3b82f6')
                                                : (theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'),
                                            color: msg.sender === 'user'
                                                ? '#000' // Better contrast on bright user bubble
                                                : (theme === 'dark' ? '#fff' : '#1f2937'),
                                        }}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-start"
                                >
                                    <div
                                        className="p-3 rounded-2xl rounded-tl-none text-sm flex gap-1 items-center"
                                        style={{
                                            background: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                                        }}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60 animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div
                            className="p-4 border-t"
                            style={{
                                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                                backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.5)',
                            }}
                        >
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder="Ask me anything..."
                                    className="flex-1 bg-transparent border-none outline-none text-sm px-2"
                                    style={{
                                        color: theme === 'dark' ? '#fff' : '#1f2937',
                                    }}
                                />
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handleSend}
                                    disabled={!inputValue.trim()}
                                    className="p-2 rounded-full transition-opacity disabled:opacity-50"
                                    style={{
                                        background: theme === 'dark' ? '#00ffff' : '#3b82f6',
                                        color: '#000',
                                    }}
                                >
                                    <Send className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-28 right-8 p-4 rounded-full shadow-lg z-50 group"
                style={{
                    background: theme === 'dark'
                        ? 'linear-gradient(135deg, #00ffff, #a855f7)'
                        : 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    boxShadow: theme === 'dark'
                        ? '0 0 20px rgba(0, 255, 255, 0.4)'
                        : '0 4px 20px rgba(59, 130, 246, 0.4)',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="w-6 h-6 text-white" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageSquare className="w-6 h-6 text-white" />
                            {/* Ping Animation */}
                            <span className="absolute top-0 right-0 -tr-1 -mt-1 w-3 h-3 rounded-full bg-red-500 border-2 border-white dark:border-black animate-pulse" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </>
    );
};
