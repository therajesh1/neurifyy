import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Box, Smartphone, Globe, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';

// Declare custom element for TypeScript
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': any;
        }
    }
}

export const VRExperiencePortfolio: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const models = [
        {
            id: 1,
            src: 'https://res.cloudinary.com/djvsbqfwv/image/upload/v1750566518/ws_mzekwl.glb',
            title: 'Immersive Product'
        },
        {
            id: 2,
            src: 'https://res.cloudinary.com/djvsbqfwv/image/upload/v1750488982/textured_mesh_iruep7.glb',
            title: '3D Asset'
        },
        {
            id: 3,
            src: 'https://res.cloudinary.com/djvsbqfwv/image/upload/v1739376263/sample_14_yusajt.glb',
            title: 'AR Experience'
        }
    ];

    const benefits = [
        { icon: Box, title: "Product Visualization", desc: "Let customers view products from every angle before buying." },
        { icon: Smartphone, title: "WebAR Integration", desc: "No apps needed. Experience AR directly in the browser." },
        { icon: Globe, title: "Virtual Showrooms", desc: "Walkable 3D environments accessible from anywhere." }
    ];

    return (
        <div className={`min-h-screen pt-32 pb-20 px-6 ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-7xl mx-auto">
                <Link to="/#portfolio" className="inline-flex items-center gap-2 mb-12 hover:text-blue-500 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    Back to Portfolio
                </Link>

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-4 block">Immersive Tech</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8">VR & AR Experiences</h1>
                    <p className={`text-xl md:text-2xl max-w-3xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Step inside the future. We create immersive 3D worlds and augmented reality interactables that bridge the gap between digital and physical.
                    </p>
                </motion.div>

                {/* 3D Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
                    {models.map((model, index) => (
                        <motion.div
                            key={model.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-[500px] rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 relative group"
                        >
                            <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/50 backdrop-blur rounded-full text-xs font-bold uppercase tracking-wider text-white">
                                Drag to Rotate
                            </div>
                            <model-viewer
                                src={model.src}
                                ios-src=""
                                alt={`A 3D model of ${model.title}`}
                                shadow-intensity="1"
                                camera-controls
                                auto-rotate
                                ar
                                style={{ width: '100%', height: '100%' }}
                            />
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-white font-bold">{model.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Why AR/VR? */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Why Immersive Tech?</h2>
                        <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Flat screens are limiting. By adding depth and interactivity, you increase engagement time by up to 200%. Whether it's trying on a watch virtually or exploring a real estate development, spatial computing is the new standard for premium digital experiences.
                        </p>
                        <div className="flex gap-4">
                            <div className="px-6 py-3 rounded-full border border-cyan-500/30 text-cyan-400 font-bold bg-cyan-500/10">300% Higher CTR</div>
                            <div className="px-6 py-3 rounded-full border border-purple-500/30 text-purple-400 font-bold bg-purple-500/10">40% Decrease in Returns</div>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {benefits.map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-6 rounded-xl flex items-start gap-4 border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-100'}`}
                            >
                                <b.icon className="w-8 h-8 text-cyan-500 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{b.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
