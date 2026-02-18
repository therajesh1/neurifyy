import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useTheme } from '@/contexts/ThemeContext';
import {
    Mail,
    MessageCircle,
    Database,
    MessageSquare,
    Briefcase,
    Megaphone,
    BarChart3,
    Bot,
    Zap
} from 'lucide-react';

const automationTools = [
    {
        id: 'gmail',
        title: 'Gmail Automation',
        icon: Mail,
        description: 'Automate email workflows, sorting, and responses intelligently.',
        color: '#EA4335'
    },
    {
        id: 'whatsapp',
        title: 'WhatsApp Bot',
        icon: MessageCircle,
        description: 'Instant customer support and engagement via automated WhatsApp messages.',
        color: '#25D366'
    },
    {
        id: 'database',
        title: 'Database Sync',
        icon: Database,
        description: 'Seamlessly synchronize and manage data across multiple platforms.',
        color: '#3b82f6'
    },
    {
        id: 'sms',
        title: 'SMS Marketing',
        icon: MessageSquare,
        description: 'Reach customers instantly with automated SMS campaigns and alerts.',
        color: '#F59E0B'
    },
    {
        id: 'business',
        title: 'Business Logic',
        icon: Briefcase,
        description: 'Streamline complex business processes with custom automation rules.',
        color: '#8B5CF6'
    },
    {
        id: 'marketing',
        title: 'Marketing Automation',
        icon: Megaphone,
        description: 'Automate ad campaigns, social media posts, and lead generation.',
        color: '#EC4899'
    },
    {
        id: 'data',
        title: 'Data Analytics',
        icon: BarChart3,
        description: 'Real-time data processing and visualization for better insights.',
        color: '#10B981'
    },
    {
        id: 'ai-agents',
        title: 'AI Agents',
        icon: Bot,
        description: 'Deploy autonomous agents to handle repetitive tasks 24/7.',
        color: '#06b6d4'
    }
];

export const AutomationSection: React.FC = () => {
    const { theme } = useTheme();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section
            ref={ref}
            className="py-32 px-6 relative overflow-hidden transition-colors duration-500"
            style={{
                backgroundColor: theme === 'dark' ? '#0a0a0a' : '#ffffff',
            }}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-200'
                    }`} />
                <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${theme === 'dark' ? 'bg-purple-500' : 'bg-purple-200'
                    }`} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
                        style={{
                            borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                            backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        <Zap size={16} className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'} />
                        <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                            Power up your workflow
                        </span>
                    </motion.div>

                    <h2
                        className="text-4xl md:text-6xl font-bold mb-6"
                        style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
                    >
                        Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Automation</span>
                    </h2>
                    <p
                        className="text-xl max-w-2xl mx-auto"
                        style={{ color: theme === 'dark' ? '#9ca3af' : '#4b5563' }}
                    >
                        Seamlessly connect your favorite apps and automate repetitive tasks with our advanced integration solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {automationTools.map((tool, index) => (
                        <motion.div
                            key={tool.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl border transition-all duration-300 group"
                            style={{
                                backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.5)',
                                borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <div
                                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                                style={{
                                    backgroundColor: `${tool.color}20`,
                                    color: tool.color
                                }}
                            >
                                <tool.icon size={28} />
                            </div>

                            <h3
                                className="text-xl font-semibold mb-3"
                                style={{ color: theme === 'dark' ? '#ffffff' : '#1f2937' }}
                            >
                                {tool.title}
                            </h3>

                            <p
                                className="text-sm leading-relaxed"
                                style={{ color: theme === 'dark' ? '#9ca3af' : '#4b5563' }}
                            >
                                {tool.description}
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ color: tool.color }}>
                                <span>Learn more</span>
                                <span>→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
