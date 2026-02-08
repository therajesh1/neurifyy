import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, PenTool, Layers, Layout, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import brand1 from '@/assets/images/portfolio/brand1.png';
import brand2 from '@/assets/images/portfolio/brand2.png';
import brand3 from '@/assets/images/portfolio/brand3.png';

export const BrandIdentityPortfolio: React.FC = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const projects = [
        { id: 1, image: brand1, title: 'Neon Corporate Identity' },
        { id: 2, image: brand2, title: 'Minimalist Tech Brand' },
        { id: 3, image: brand3, title: 'Cybernetic Packaging' },
    ];

    const elements = [
        { icon: Layout, title: "Visual Systems", desc: "Cohesive design languages across all touchpoints." },
        { icon: Palette, title: "Color Psychology", desc: "Palettes engineered to evoke specific emotional responses." },
        { icon: Layers, title: "Brand Architecture", desc: "Scalable structures for growing product ecosystems." },
        { icon: PenTool, title: "Typography", desc: "Custom type treatments that speak your brand's voice." }
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
                    <span className="text-pink-500 font-bold tracking-widest uppercase text-sm mb-4 block">Graphic Design</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8">Brand Identity</h1>
                    <p className={`text-xl md:text-2xl max-w-3xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        We forge visual identities that resonate with the digital-first generation. It's not just a logo; it's the visual soul of your business.
                    </p>
                </motion.div>

                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* The Process */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold mb-16 text-center">We Design For Impact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {elements.map((el, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-8 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-100 shadow-xl'}`}
                            >
                                <el.icon className="w-10 h-10 text-pink-500 mb-6" />
                                <h3 className="text-xl font-bold mb-3">{el.title}</h3>
                                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{el.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Quote */}
                <div className="text-center max-w-4xl mx-auto py-20 border-y border-gray-800">
                    <p className="text-3xl md:text-4xl italic font-serif leading-relaxed mb-6">
                        "Design is the silent ambassador of your brand."
                    </p>
                    <p className="text-pink-500 font-bold uppercase tracking-widest">— Paul Rand</p>
                </div>
            </div>
        </div>
    );
};
