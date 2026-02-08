import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { useTheme } from '@/contexts/ThemeContext';
import { services } from '@/data/services';
import {
    ArrowLeft,
    CheckCircle,
    ChevronDown,
    ChevronUp,
    Clock,
    Target,
    Zap,
    Sparkles,
    Cpu,
} from 'lucide-react';

export const ServiceDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { theme } = useTheme();
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const service = services.find((s) => s.id === id);

    useEffect(() => {
        if (!service) {
            navigate('/services');
        }
        window.scrollTo(0, 0);
    }, [service, navigate]);

    if (!service) return null;

    const Icon = service.icon;

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const isDark = theme === 'dark';

    return (
        <div
            className="min-h-screen pt-32 pb-20 px-4 md:px-6 transition-colors duration-500 overflow-hidden relative"
            style={{
                backgroundColor: isDark ? '#030014' : '#f8fafc',
            }}
        >
            {/* Animated Background Mesh */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[100px]"
                    style={{ background: isDark ? 'radial-gradient(circle, #00ffff 0%, transparent 70%)' : 'radial-gradient(circle, #3b82f6 0%, transparent 70%)', opacity: 0.15 }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -40, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full blur-[120px]"
                    style={{ background: isDark ? 'radial-gradient(circle, #a855f7 0%, transparent 70%)' : 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', opacity: 0.15 }}
                />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
                />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate(-1)}
                    className="mb-12 flex items-center gap-2 group transition-all duration-300"
                >
                    <div
                        className="p-3 rounded-full backdrop-blur-md transition-all group-hover:scale-110"
                        style={{
                            background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                            border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)'
                        }}
                    >
                        <ArrowLeft className="w-5 h-5" style={{ color: isDark ? '#fff' : '#1f2937' }} />
                    </div>
                    <span className="font-medium tracking-wide" style={{ color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(31,41,55,0.8)' }}>
                        Back to Services
                    </span>
                </motion.button>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: 40 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="h-[2px]"
                                style={{ background: isDark ? '#00ffff' : '#3b82f6' }}
                            />
                            <span
                                className="text-sm font-bold tracking-[0.2em] uppercase"
                                style={{ color: isDark ? '#00ffff' : '#3b82f6' }}
                            >
                                Premium Service
                            </span>
                        </div>

                        <h1
                            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                            style={{
                                color: isDark ? '#ffffff' : '#1f2937',
                            }}
                        >
                            <span className="block">{service.title.split(' ')[0]}</span>
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    background:
                                        theme === 'dark'
                                            ? 'linear-gradient(90deg, #00ffff, #a855f7)'
                                            : 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    color: 'transparent',
                                    display: 'inline-block',
                                }}
                            >
                                {service.title.split(' ').slice(1).join(' ')}
                            </span>
                        </h1>

                        <p
                            className="text-xl md:text-2xl font-light mb-8 leading-relaxed"
                            style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(31,41,55,0.7)' }}
                        >
                            {service.tagline}
                        </p>

                        <motion.div
                            className="p-6 rounded-2xl backdrop-blur-sm border-l-4"
                            style={{
                                background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                                borderColor: isDark ? '#a855f7' : '#8b5cf6',
                            }}
                        >
                            <p
                                className="text-lg leading-relaxed whitespace-pre-line"
                                style={{ color: isDark ? 'rgba(255,255,255,0.9)' : 'rgba(31,41,55,0.9)' }}
                            >
                                {service.longDescription}
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-square max-w-lg mx-auto">
                            <div
                                className="absolute inset-0 rounded-[3rem] rotate-6 opacity-30 blur-2xl"
                                style={{ background: isDark ? 'linear-gradient(45deg, #00ffff, #a855f7)' : 'linear-gradient(45deg, #3b82f6, #8b5cf6)' }}
                            />
                            <div
                                className="absolute inset-0 rounded-[3rem] -rotate-3 opacity-30 transform translate-y-4 blur-xl"
                                style={{ background: isDark ? 'linear-gradient(to bottom, #a855f7, transparent)' : 'linear-gradient(to bottom, #8b5cf6, transparent)' }}
                            />
                            <div
                                className="relative h-full w-full rounded-[2.5rem] flex items-center justify-center overflow-hidden backdrop-blur-xl border border-white/10"
                                style={{
                                    background: isDark ? 'rgba(20,20,30,0.6)' : 'rgba(255,255,255,0.8)',
                                    boxShadow: isDark ? '0 25px 50px -12px rgba(0,0,0,0.5)' : '0 25px 50px -12px rgba(0,0,0,0.1)'
                                }}
                            >
                                <Icon
                                    className="w-40 h-40 md:w-56 md:h-56 stroke-[1]"
                                    style={{
                                        color: isDark ? '#ffffff' : '#1f2937',
                                        filter: `drop-shadow(0 0 30px ${isDark ? '#00ffff' : '#3b82f6'})`
                                    }}
                                />

                                {/* Floating elements inside hero card */}
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-10 right-10 p-3 rounded-xl backdrop-blur-md border border-white/20"
                                    style={{ background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.5)' }}
                                >
                                    <Sparkles className="w-6 h-6 text-yellow-400" />
                                </motion.div>
                                <motion.div
                                    animate={{ y: [10, -10, 10] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-10 left-10 p-3 rounded-xl backdrop-blur-md border border-white/20"
                                    style={{ background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.5)' }}
                                >
                                    <Cpu className="w-6 h-6 text-cyan-400" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Stats / Benefits with Glassmorphism */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32"
                >
                    {service.benefits.map((benefit: string, index: number) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10, boxShadow: '0 20px 40px -15px rgba(0,255,255,0.2)' }}
                            className="p-8 rounded-3xl relative overflow-hidden transition-all duration-300 group"
                            style={{
                                background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.6)',
                                border: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(255,255,255,0.8)',
                                backdropFilter: 'blur(20px)',
                            }}
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-white/5 rounded-bl-[4rem]" />
                            <div className="mb-6 p-4 rounded-2xl inline-block"
                                style={{ background: isDark ? 'rgba(0,255,255,0.1)' : 'rgba(59,130,246,0.1)' }}>
                                <Target className="w-8 h-8" style={{ color: isDark ? '#00ffff' : '#3b82f6' }} />
                            </div>
                            <h3 className="font-semibold text-lg leading-snug" style={{ color: isDark ? '#fff' : '#1f2937' }}>
                                {benefit}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Feature Showcase - Zigzag Layout */}
                {/* Feature Showcase - Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {service.features.map((featureBlock: { title: string; description: string[] }, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 group"
                            style={{
                                background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.6)',
                                borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                                backdropFilter: 'blur(10px)',
                                boxShadow: isDark ? '0 10px 40px -10px rgba(0,0,0,0.5)' : '0 10px 40px -10px rgba(0,0,0,0.05)'
                            }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span
                                    className="flex items-center justify-center w-12 h-12 rounded-full text-xl font-bold transition-transform group-hover:scale-110"
                                    style={{
                                        background: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                                        color: isDark ? '#00ffff' : '#3b82f6',
                                    }}
                                >
                                    {index + 1}
                                </span>
                                <h2
                                    className="text-2xl font-bold"
                                    style={{ color: isDark ? '#fff' : '#1f2937' }}
                                >
                                    {featureBlock.title}
                                </h2>
                            </div>

                            <ul className="space-y-4">
                                {featureBlock.description.map((item: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle
                                            className="w-5 h-5 flex-shrink-0 mt-1"
                                            style={{ color: isDark ? '#a855f7' : '#8b5cf6' }}
                                        />
                                        <span style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(31,41,55,0.7)' }}>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Process Timeline */}
                <div className="mb-32 relative">
                    <div className="text-center mb-16">
                        <span
                            className="text-sm font-bold uppercase tracking-widest mb-2 block"
                            style={{ color: isDark ? '#a855f7' : '#8b5cf6' }}
                        >
                            How We Work
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold" style={{ color: isDark ? '#fff' : '#1f2937' }}>
                            Our Process
                        </h2>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Line */}
                        <div
                            className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-[2px] -translate-x-1/2"
                            style={{
                                background: isDark
                                    ? 'linear-gradient(to bottom, transparent, #00ffff, #a855f7, transparent)'
                                    : 'linear-gradient(to bottom, transparent, #3b82f6, #8b5cf6, transparent)'
                            }}
                        />

                        {service.process.map((step: string, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex items-center mb-12 last:mb-0 md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Content Box */}
                                <div className="ml-12 md:ml-0 md:w-[45%] p-6 rounded-2xl border backdrop-blur-sm transition-all hover:bg-white/5"
                                    style={{
                                        background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.6)',
                                        borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    <h3 className="text-xl font-bold mb-2" style={{ color: isDark ? '#fff' : '#1f2937' }}>{step}</h3>
                                    <p className="text-sm opacity-70" style={{ color: isDark ? '#fff' : '#000' }}>
                                        Phase {index + 1} of deployment and integration.
                                    </p>
                                </div>

                                {/* Timeline Node */}
                                <div
                                    className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center border-4 z-10"
                                    style={{
                                        background: isDark ? '#000' : '#fff',
                                        borderColor: isDark ? '#00ffff' : '#3b82f6',
                                        color: isDark ? '#fff' : '#1f2937'
                                    }}
                                >
                                    <span className="text-xs font-bold">{index + 1}</span>
                                </div>

                                {/* Empty Space for alignment */}
                                <div className="hidden md:block md:w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* FAQs Accordion */}
                <div className="max-w-3xl mx-auto mb-32">
                    <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: isDark ? '#fff' : '#1f2937' }}>
                        Common Questions
                    </h2>
                    <div className="space-y-4">
                        {service.faqs.map((faq: { question: string; answer: string }, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="rounded-2xl overflow-hidden transition-all duration-300"
                                style={{
                                    background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.6)',
                                    border: activeAccordion === index
                                        ? (isDark ? '1px solid #a855f7' : '1px solid #8b5cf6')
                                        : '1px solid transparent'
                                }}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
                                >
                                    <span
                                        className="font-semibold text-lg"
                                        style={{ color: isDark ? '#fff' : '#1f2937' }}
                                    >
                                        {faq.question}
                                    </span>
                                    {activeAccordion === index
                                        ? <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: isDark ? '#a855f7' : '#8b5cf6' }} />
                                        : <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(31,41,55,0.5)' }} />
                                    }
                                </button>
                                <AnimatePresence>
                                    {activeAccordion === index && (
                                        <motion.div
                                            key="answer"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <p
                                                className="p-6 pt-0 leading-relaxed"
                                                style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(31,41,55,0.7)' }}
                                            >
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center"
                >
                    {/* Animated Gradient Background */}
                    <div
                        className="absolute inset-0 animate-pulse"
                        style={{
                            background: isDark
                                ? 'linear-gradient(135deg, rgba(88, 28, 135, 0.5), rgba(0, 0, 0, 0.9))'
                                : 'linear-gradient(135deg, rgba(239, 246, 255, 1), rgba(224, 231, 255, 1))'
                        }}
                    />
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #00ffff 0%, transparent 70%)' }} />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2
                            className="text-4xl md:text-6xl font-bold mb-8"
                            style={{ color: isDark ? '#ffffff' : '#1f2937' }}
                        >
                            Start Your Evolution
                        </h2>
                        <p className="text-xl md:text-2xl mb-12 opacity-90" style={{ color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(31,41,55,0.8)' }}>
                            Ready to deploy {service.title}? Let's build something extraordinary together.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/contact')}
                            className="px-12 py-5 rounded-full font-bold text-lg md:text-xl shadow-2xl relative overflow-hidden group"
                            style={{
                                background: isDark ? '#fff' : '#1f2937',
                                color: isDark ? '#000' : '#fff',
                            }}
                        >
                            <span className="relative z-10">{service.ctaText}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        </motion.button>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};
