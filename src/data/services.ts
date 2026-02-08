import {
    Globe,
    Brain,
    TrendingUp,
    MessageSquare,
    Palette,
    FileText,
    Workflow,
    Cpu,
    Box,
    LucideIcon,
} from 'lucide-react';

export interface Service {
    id: string;
    icon: LucideIcon;
    title: string;
    tagline: string;
    description: string;
    longDescription: string;
    features: {
        title: string;
        description: string[];
    }[];
    process: string[];
    targetAudience: string[];
    benefits: string[];
    faqs: {
        question: string;
        answer: string;
    }[];
    ctaText: string;
    meta: {
        title: string;
        description: string;
    };
}

export const services: Service[] = [
    {
        id: 'website-making-management',
        icon: Globe,
        title: 'Website Making & Management',
        tagline: 'Premium Website Design & Full-Scale Website Management',
        description: 'Build stunning, responsive websites with cutting-edge technology and seamless management.',
        longDescription: `Your website is not a brochure.\nIt is your brand’s most valuable digital asset.\n\nAt Neurify, we design and manage high-end, performance-driven websites built to dominate attention, rank on Google, and convert traffic into revenue.\n\nWe don’t follow trends — we engineer digital authority.\n\nWhat Sets Our Websites Apart\nMost websites look good. Very few perform.\n\nWe build websites that are:\n\nStrategically designed for conversion psychology\nArchitected for SEO dominance\nOptimized for speed, security, and scalability\nManaged continuously for long-term growth`,
        features: [
            {
                title: 'Luxury UI/UX Design',
                description: [
                    'Premium, modern, minimal interfaces',
                    'Brand-aligned visual identity',
                    'User journey mapping for higher engagement',
                ],
            },
            {
                title: 'SEO-First Architecture',
                description: [
                    'Clean URL structures',
                    'Schema-ready layouts',
                    'Optimized headings & crawl paths',
                    'Core Web Vitals optimization',
                ],
            },
            {
                title: 'Performance Engineering',
                description: [
                    'Lightning-fast load times',
                    'Mobile-first responsiveness',
                    'Secure hosting & optimization',
                ],
            },
            {
                title: 'Ongoing Website Management',
                description: [
                    'Content updates & feature additions',
                    'Security monitoring & backups',
                    'Speed tuning & SEO maintenance',
                ],
            },
        ],
        process: [
            'Discovery',
            'Strategy',
            'Design',
            'Build',
            'Optimize',
            'Manage',
        ],
        targetAudience: [
            'Businesses that want authority',
            'Startups that want scale',
            'Brands that want results, not excuses',
        ],
        benefits: [
            'Dominate search rankings with SEO-first architecture',
            'Convert more visitors with psychology-driven design',
            'Save time with fully managed updates and security',
            'Scale effortlessly with performance-engineered code',
        ],
        faqs: [
            {
                question: 'How long does it take to build a website?',
                answer: 'Most websites are delivered within 2–6 weeks depending on complexity.',
            },
            {
                question: 'Will my website be SEO-optimized?',
                answer: 'Yes. Every Neurify website is built with SEO at its core.',
            },
            {
                question: 'Do you provide long-term maintenance?',
                answer: 'Absolutely. We manage, secure, and optimize your website continuously.',
            },
        ],
        ctaText: 'Build My High-Performance Website',
        meta: {
            title: 'Premium Website Design & Management Services | Neurify',
            description: 'High-performance website design and management services built for SEO, speed, and conversions. Scale your digital presence with Neurify.',
        },
    },
    {
        id: 'machine-learning-tasks',
        icon: Brain,
        title: 'Machine Learning Tasks',
        tagline: 'Custom Machine Learning Solutions Built for Business Impact',
        description: 'Leverage advanced ML algorithms to solve complex problems and unlock data insights.',
        longDescription: `Machine learning should solve problems, not just look impressive.\n\nAt Neurify, we build production-ready ML systems that help businesses predict, automate, and scale intelligently.\n\nOur ML Philosophy\nNo fluff. No experiments that never ship.\n\nWe build:\nAccurate models\nExplainable logic\nDeployment-ready systems\nMeasurable business outcomes`,
        features: [
            {
                title: 'Predictive Intelligence',
                description: [
                    'Sales & demand forecasting',
                    'Customer churn prediction',
                    'Risk & trend analysis',
                ],
            },
            {
                title: 'NLP Solutions',
                description: [
                    'Sentiment analysis',
                    'Text classification',
                    'Intelligent document processing',
                    'Chatbot intelligence',
                ],
            },
            {
                title: 'Computer Vision',
                description: [
                    'Image recognition',
                    'Object detection',
                    'Video analysis',
                ],
            },
            {
                title: 'Recommendation Engines',
                description: [
                    'Product recommendations',
                    'Personalized content delivery',
                    'User behavior modeling',
                ],
            },
        ],
        process: [
            'Data Assessment',
            'Model Selection',
            'Training & Tuning',
            'Validation',
            'Deployment',
            'Monitoring',
        ],
        targetAudience: [
            'Enterprises with data-rich environments',
            'Tech startups needing intelligent features',
            'Organizations looking to automate complex decisions',
        ],
        benefits: [
            'Predict trends before they happen',
            'Automate complex decision-making processes',
            'Unlock hidden value in your data',
            'Scale operations with intelligent systems',
        ],
        faqs: [
            {
                question: 'Do you build custom ML models?',
                answer: 'Yes. Every solution is tailored to your business problem.',
            },
            {
                question: 'Can you deploy models to production?',
                answer: 'Yes. We deliver end-to-end ML systems, from training to deployment.',
            },
            {
                question: 'What kind of data do I need?',
                answer: 'We help you assess your data readiness during the discovery phase.',
            },
        ],
        ctaText: 'Build a Custom ML Solution',
        meta: {
            title: 'Custom Machine Learning Solutions for Businesses | Neurify',
            description: 'Build scalable, production-ready machine learning solutions for prediction, automation, and intelligent decision-making.',
        },
    },
    {
        id: 'ai-digital-marketing',
        icon: TrendingUp,
        title: 'AI Digital Marketing',
        tagline: 'AI-Powered Digital Marketing That Maximizes ROI',
        description: 'Marketing with AI is control, clarity, and compounding growth. Stop guessing and start scaling.',
        longDescription: `Marketing without AI is guesswork.\nMarketing with AI is control, clarity, and compounding growth.\n\nAt Neurify, we use artificial intelligence, data science, and behavioral analysis to build marketing systems that don’t just attract traffic — they convert it, retain it, and scale it.\n\nThis is not “run ads and hope.”\nThis is precision-driven growth engineering.\n\nWhy AI Digital Marketing Is a Competitive Advantage\nTraditional marketing reacts after results drop.\nAI marketing predicts, adapts, and optimizes in real time.\n\nWhat We Do Differently\n🔹 Data-Driven Targeting: We analyze user behavior, intent signals, and engagement patterns to target buyers, not browsers.\n🔹 AI-Optimized SEO Strategies: AI-powered keyword clustering, search intent mapping, content gap analysis, and continuous ranking optimization.\n🔹 Predictive Ad Performance: Our systems forecast which ads will perform best, which audiences will convert, and where budget should be scaled or cut.\n🔹 Continuous Improvement Loops: Campaigns don’t stay static. They evolve daily based on live performance data.`,
        features: [
            {
                title: 'AI SEO Optimization',
                description: [
                    'Technical SEO audits',
                    'AI keyword research',
                    'Content optimization',
                    'Long-term ranking strategies',
                ],
            },
            {
                title: 'Paid Ads Performance Scaling',
                description: [
                    'Google Ads & Meta Ads optimization',
                    'Smart bidding strategies',
                    'Budget efficiency optimization',
                    'Funnel-based ad structuring',
                ],
            },
            {
                title: 'Conversion Rate Optimization (CRO)',
                description: [
                    'Funnel analysis',
                    'Landing page optimization',
                    'A/B testing',
                    'User journey improvements',
                ],
            },
            {
                title: 'Behavioral Analytics',
                description: [
                    'User behavior tracking',
                    'Drop-off analysis',
                    'Engagement insights',
                ],
            },
            {
                title: 'Funnel Intelligence',
                description: [
                    'Lead quality analysis',
                    'Funnel bottleneck detection',
                    'Revenue-focused optimization',
                ],
            },
        ],
        process: [
            'Audit & Strategy',
            'Setup & Integration',
            'Launch',
            'Optimize',
            'Scale',
        ],
        targetAudience: [
            'E-commerce Brands',
            'SaaS Companies',
            'Growth-Stage Startups',
        ],
        benefits: [
            'Smarter audience targeting',
            'Lower customer acquisition costs',
            'Higher conversion rates',
            'Faster scaling with less waste',
        ],
        faqs: [
            {
                question: 'Is AI marketing better than traditional marketing?',
                answer: 'Yes. AI enables real-time optimization, predictive targeting, and data-backed decisions, outperforming traditional methods.',
            },
            {
                question: 'Can AI marketing reduce ad spend?',
                answer: 'Absolutely. AI eliminates wasted spend by focusing only on high-intent audiences.',
            },
            {
                question: 'Is AI marketing suitable for small businesses?',
                answer: 'Yes. AI helps small businesses compete efficiently with limited budgets.',
            },
        ],
        ctaText: 'Scale My Marketing with AI',
        meta: {
            title: 'AI Digital Marketing Services for High ROI | Neurify',
            description: 'AI-driven digital marketing services that optimize SEO, ads, and conversions to reduce waste and maximize ROI.',
        },
    },
    {
        id: 'ai-chatbots',
        icon: MessageSquare,
        title: 'AI Chatbots',
        tagline: 'Intelligent AI Chatbots That Convert, Support & Scale 24/7',
        description: 'Intelligent conversational automation that drives business outcomes without human delay.',
        longDescription: `Your customers expect instant responses.\nDelays cost trust, leads, and revenue.\n\nNeurify builds intelligent AI chatbots that engage users, answer queries, qualify leads, and automate support — without human delay.\n\nThis is not a basic bot.\nThis is conversational automation that drives business outcomes.\n\nWhy AI Chatbots Matter\nUsers leave if responses take longer than seconds.\nHuman support doesn’t scale instantly.\nLeads are lost outside business hours.\n\nAI chatbots solve all three.\n\n🤖 One chatbot can do the work of an entire support team — instantly and endlessly.`,
        features: [
            {
                title: 'Natural Language Understanding',
                description: [
                    'Understands real human language',
                    'Context-aware responses',
                    'Handles complex queries',
                ],
            },
            {
                title: 'Lead Capture & Qualification',
                description: [
                    'Automatically identify leads',
                    'Filter high-quality prospects',
                    'Route to sales teams',
                ],
            },
            {
                title: 'CRM Integrations',
                description: [
                    'Seamlessly connect with your CRM',
                    'Sync with sales tools',
                    'Update customer databases',
                ],
            },
            {
                title: 'Website & WhatsApp Bots',
                description: [
                    'Deploy across websites',
                    'WhatsApp integration',
                    'Messaging platform support',
                ],
            },
            {
                title: 'Custom Workflows',
                description: [
                    'Tailored logic for your business',
                    'Automated booking flows',
                    'Order tracking automation',
                ],
            },
        ],
        process: [
            'Analysis',
            'Flow Design',
            'Development',
            'Integration',
            'Testing',
            'Deployment',
        ],
        targetAudience: [
            'Customer Support Teams',
            'E-commerce Businesses',
            'Service Providers',
        ],
        benefits: [
            'Instant responses 24/7',
            'Scale support without hiring',
            'Capture leads outside business hours',
            'Reduce support costs',
        ],
        faqs: [
            {
                question: 'Can chatbots replace human support completely?',
                answer: 'They handle up to 80% of repetitive queries, freeing humans for complex tasks.',
            },
            {
                question: 'Are chatbots customizable?',
                answer: 'Yes. Every chatbot is built around your business logic and goals.',
            },
        ],
        ctaText: 'Build My AI Chatbot',
        meta: {
            title: 'AI Chatbot Development Services | Neurify',
            description: 'Custom AI chatbot development for websites and messaging platforms to automate support, capture leads, and boost conversions.',
        },
    },
    {
        id: 'graphic-design-thumbnails',
        icon: Palette,
        title: 'Graphic Design & Thumbnails',
        tagline: 'High-Impact Visual Design That Demands Attention',
        description: 'Strategic visuals engineered to capture attention, drive clicks, and reinforce brand authority.',
        longDescription: `Attention is currency.\nIf your design doesn’t stop the scroll, it doesn’t exist.\n\nAt Neurify, we create strategic visuals engineered to capture attention, drive clicks, and reinforce brand authority.\n\n🎨 Designed for clicks. Built for performance.`,
        features: [
            {
                title: 'YouTube Thumbnails',
                description: [
                    'Click-optimized layouts',
                    'Emotion-driven visuals',
                    'Platform-specific sizing',
                ],
            },
            {
                title: 'Ad Creatives',
                description: [
                    'High-CTR ad designs',
                    'Performance-focused layouts',
                    'Brand-consistent visuals',
                ],
            },
            {
                title: 'Social Media Graphics',
                description: [
                    'Scroll-stopping content',
                    'Engagement-driven designs',
                    'Platform-optimized formats',
                ],
            },
            {
                title: 'Brand Assets',
                description: [
                    'Visual identity elements',
                    'Marketing creatives',
                    'Digital brand consistency',
                ],
            },
        ],
        process: [
            'Briefing',
            'Concept Development',
            'Design',
            'Review',
            'Finalization',
        ],
        targetAudience: [
            'YouTubers & Creators',
            'Digital Marketers',
            'Brands',
        ],
        benefits: [
            'Higher Click-Through Rates',
            'Stronger Brand Identity',
            'Increased Engagement',
            'Professional Aesthetics',
        ],
        faqs: [
            {
                question: 'Do you design platform-specific creatives?',
                answer: 'Yes. Each design is optimized for its platform and audience behavior.',
            },
        ],
        ctaText: 'Design High-Converting Creatives',
        meta: {
            title: 'Professional Graphic Design & Thumbnails | Neurify',
            description: 'High-impact graphic design and thumbnail services optimized for clicks, engagement, and conversions.',
        },
    },
    {
        id: 'content-writing',
        icon: FileText,
        title: 'Content Writing',
        tagline: 'SEO Content Writing That Ranks, Persuades & Converts',
        description: 'SEO-optimized, intent-driven content that ranks on Google and converts readers into customers.',
        longDescription: `Content is not filler.\nContent is traffic, authority, and revenue combined.\n\nNeurify delivers SEO-optimized, intent-driven content that ranks on Google and converts readers into customers.\n\nOur Writing Strategy:\nDeep keyword & intent research\nHuman-first storytelling\nSearch-engine optimization\nConversion psychology integration\n\n✍️ Content engineered for rankings and revenue.`,
        features: [
            {
                title: 'SEO Website Pages',
                description: [
                    'Keyword-optimized copy',
                    'Conversion-focused structure',
                    'Brand voice alignment',
                ],
            },
            {
                title: 'Long-form Blogs & Articles',
                description: [
                    'In-depth research',
                    'Engagement-focused writing',
                    'SEO structure',
                ],
            },
            {
                title: 'Conversion-Focused Landing Pages',
                description: [
                    'Persuasive copywriting',
                    'Call-to-action optimization',
                    'Benefit-driven messaging',
                ],
            },
            {
                title: 'Marketing & Sales Copy',
                description: [
                    'Ad copy',
                    'Email sequences',
                    'Sales scripts',
                ],
            },
        ],
        process: [
            'Research',
            'Strategy',
            'Drafting',
            'Optimization',
            'Review',
        ],
        targetAudience: [
            'Businesses seeking organic traffic',
            'Brands needing authority',
            'Marketing teams',
        ],
        benefits: [
            'Higher search rankings',
            'Increased organic traffic',
            'Better conversion rates',
            'Established authority',
        ],
        faqs: [
            {
                question: 'Do you guarantee SEO optimization?',
                answer: 'Yes. Every piece is optimized for keywords, intent, and readability.',
            },
        ],
        ctaText: 'Write SEO Content That Ranks',
        meta: {
            title: 'SEO Content Writing Services | Neurify',
            description: 'Professional SEO content writing that drives organic traffic, builds authority, and increases conversions.',
        },
    },
    {
        id: 'business-automation',
        icon: Workflow,
        title: 'Business Automation',
        tagline: 'Smart Automation That Eliminates Inefficiency',
        description: 'Design automation systems that streamline operations, reduce costs, and scale effortlessly.',
        longDescription: `Manual work drains time, money, and focus.\nAutomation gives you leverage.\n\nWe design automation systems that streamline operations, reduce costs, and scale effortlessly.\n\n⚙️ Stop managing tasks. Start scaling systems.`,
        features: [
            {
                title: 'CRM Workflows',
                description: [
                    'Automated lead entry',
                    'Follow-up sequences',
                    'Data synchronization',
                ],
            },
            {
                title: 'Lead Management',
                description: [
                    'Automated qualification',
                    'Lead scoring',
                    'Routing to sales',
                ],
            },
            {
                title: 'Email & Marketing Automation',
                description: [
                    'Campaign scheduling',
                    'Personalized sequences',
                    'Behavior-triggered emails',
                ],
            },
            {
                title: 'Reporting & Analytics',
                description: [
                    'Automated dashboards',
                    'Performance tracking',
                    'Data consolidation',
                ],
            },
            {
                title: 'Internal Processes',
                description: [
                    'Task assignment',
                    'Project management automation',
                    'Approval workflows',
                ],
            },
        ],
        process: [
            'Audit',
            'Strategy',
            'Build',
            'Test',
            'Optimize',
        ],
        targetAudience: [
            'Scaling Businesses',
            'Operational Teams',
            'Efficiency-focused Managers',
        ],
        benefits: [
            'Eliminate repetitive tasks',
            'Reduce operational costs',
            'Minimize human error',
            'Scale effortlessly',
        ],
        faqs: [],
        ctaText: 'Automate My Business',
        meta: {
            title: 'Business Automation Solutions | Neurify',
            description: 'Custom business automation solutions to eliminate manual work, improve efficiency, and scale operations.',
        },
    },
    {
        id: 'automation-ai-ml',
        icon: Cpu,
        title: 'Automation with AI & ML',
        tagline: 'Intelligent Automation That Learns, Predicts & Improves',
        description: 'Intelligent systems that adapt, learn, and optimize continuously using AI and ML.',
        longDescription: `Rule-based automation follows instructions.\nAI automation makes decisions.\n\nWe build intelligent systems that adapt, learn, and optimize continuously.\n\n🚀 Automation that evolves with your business.`,
        features: [
            {
                title: 'Predictive Task Automation',
                description: [
                    'Forecast demand',
                    'Pre-emptive actions',
                    'Dynamic scheduling',
                ],
            },
            {
                title: 'Smart Customer Segmentation',
                description: [
                    'Behavior-based grouping',
                    'Dynamic profiles',
                    'Targeted engagement',
                ],
            },
            {
                title: 'Intelligent Scheduling',
                description: [
                    'Resource allocation',
                    'Optimal timing',
                    'Conflict resolution',
                ],
            },
            {
                title: 'Decision-Making Systems',
                description: [
                    'Automated approvals',
                    'Risk assessment',
                    'Strategic recommendations',
                ],
            },
            {
                title: 'Adaptive Workflows',
                description: [
                    'Self-optimizing processes',
                    'Error correction',
                    'Continuous improvement',
                ],
            },
        ],
        process: [
            'Data Analysis',
            'Model Training',
            'Integration',
            'Testing',
            'Deployment',
        ],
        targetAudience: [
            'Data-Driven Enterprises',
            'Tech-Forward Companies',
            'Complex Operations',
        ],
        benefits: [
            'Intelligent decision making',
            'Continuous optimization',
            'Predictive capabilities',
            'Adaptive operations',
        ],
        faqs: [],
        ctaText: 'Build Intelligent Automation',
        meta: {
            title: 'AI & ML Automation Solutions | Neurify',
            description: 'Advanced automation solutions powered by artificial intelligence and machine learning.',
        },
    },
    {
        id: 'ar-vr-3d-model-services',
        icon: Box,
        title: 'AR / VR & 3D Model Services',
        tagline: 'Immersive AR, VR & 3D Experiences for the Future',
        description: 'Create AR, VR, and 3D solutions that let users interact, explore, and experience products before buying.',
        longDescription: `Static visuals are limited.\nImmersive experiences convert imagination into engagement.\n\nNeuralMark creates AR, VR, and 3D solutions that let users interact, explore, and experience products before buying.\n\n🕶️ Don’t show products. Let users experience them.`,
        features: [
            {
                title: '3D Product Modeling',
                description: [
                    'High-fidelity models',
                    'Interactive viewers',
                    'Configurable assets',
                ],
            },
            {
                title: 'AR Product Visualization',
                description: [
                    'Try-before-you-buy',
                    'In-room placement',
                    'Interactive packaging',
                ],
            },
            {
                title: 'VR Simulations',
                description: [
                    'Training environments',
                    'Virtual tours',
                    'Immersive showrooms',
                ],
            },
            {
                title: 'Interactive Experiences',
                description: [
                    'Gamified marketing',
                    'Virtual events',
                    'Brand activations',
                ],
            },
            {
                title: 'Metaverse-Ready Assets',
                description: [
                    'Digital collectibles',
                    'Virtual real estate',
                    'Avatar accessories',
                ],
            },
        ],
        process: [
            'Concept',
            'Modeling',
            'Development',
            'Testing',
            'Deployment',
        ],
        targetAudience: [
            'Retail & E-commerce',
            'Real Estate',
            'Education & Training',
        ],
        benefits: [
            'Higher engagement',
            'Reduced return rates',
            'Memorable brand experiences',
            'Cutting-edge appeal',
        ],
        faqs: [],
        ctaText: 'Create Immersive Experiences',
        meta: {
            title: 'AR, VR & 3D Modeling Services | Neurify',
            description: 'Immersive AR, VR, and 3D modeling services for marketing, education, and product visualization.',
        },
    },
];
