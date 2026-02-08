import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import ai1 from '@/assets/images/portfolio/ai1.png';
import ai2 from '@/assets/images/portfolio/ai2.png';

export const AIChatbotsPortfolio: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const projects = [
        { id: 1, image: ai1, title: 'AI Assistant Interface' },
        { id: 2, image: ai2, title: 'Neural Network Chat' },
    ];

    return (
        <div className={`min-h-screen pt-32 px-6 ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-7xl mx-auto">
                <Link to="/#portfolio" className="inline-flex items-center gap-2 mb-12 hover:text-blue-500 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    Back to Portfolio
                </Link>

                <h1 className="text-5xl font-bold mb-8">Intelligent Chatbots</h1>
                <p className={`text-xl mb-16 max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Conversational AI interfaces designed for natural interaction and automated efficiency.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-video rounded-2xl overflow-hidden"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
