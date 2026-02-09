
export interface KnowledgeItem {
    id: string;
    keywords: string[];
    answer: string;
    category: 'general' | 'service' | 'contact' | 'about';
}

export const knowledgeBase: KnowledgeItem[] = [
    // General / Greetings
    {
        id: 'greeting',
        keywords: ['hello', 'hi', 'hey', 'greetings', 'start', 'begin'],
        answer: "Hello! I'm the Neurify AI Assistant. I can help you with information about our services, expertise, and how we can transform your business with AI. What can I do for you today?",
        category: 'general',
    },
    {
        id: 'identity',
        keywords: ['who are you', 'what are you', 'your name'],
        answer: "I am Neurify's advanced AI assistant, designed to guide you through our futuristic marketing and technology solutions.",
        category: 'general',
    },
    {
        id: 'capabilities',
        keywords: ['what can you do', 'help', 'capabilities', 'features'],
        answer: "I can provide details on our AI marketing services, machine learning solutions, web development, automation, and more. Just ask!",
        category: 'general',
    },

    // About Company
    {
        id: 'about-neurify',
        keywords: ['about', 'company', 'agency', 'who is neurify', 'what is neurify'],
        answer: "Neurify is a forward-thinking AI marketing agency. We combine artificial intelligence, data science, and premium design to build intelligent digital experiences that drive real business growth.",
        category: 'about',
    },
    {
        id: 'mission',
        keywords: ['mission', 'goal', 'objective'],
        answer: "Our mission is to empower businesses with cutting-edge AI solutions that drive growth, efficiency, and innovation, making advanced technology accessible to all.",
        category: 'about',
    },
    {
        id: 'vision',
        keywords: ['vision', 'future'],
        answer: "We envision a future where intelligent technology seamlessly enhances every aspect of business and human experience, leading global digital transformation.",
        category: 'about',
    },
    {
        id: 'values',
        keywords: ['values', 'culture', 'principles'],
        answer: "We are driven by Innovation, Client Focus, Excellence, and Collaboration. We push boundaries to deliver extraordinary results.",
        category: 'about',
    },

    // Services - General
    {
        id: 'services-overview',
        keywords: ['services', 'what do you offer', 'products', 'solutions'],
        answer: "We offer a range of premium services including: Website Making & Management, Machine Learning Solutions, AI Digital Marketing, AI Chatbots, Graphic Design, Content Writing, Business Automation, and AR/VR Experiences.",
        category: 'service',
    },

    // Specific Services (Extracted from services.ts)
    {
        id: 'web-design',
        keywords: ['website', 'web design', 'web development', 'site'],
        answer: "Our Website Making & Management service builds stunning, high-performance websites engineered for SEO dominance and conversion settings. We handle design, development, and ongoing management.",
        category: 'service',
    },
    {
        id: 'machine-learning',
        keywords: ['machine learning', 'ml', 'predictive', 'algorithms', 'data science'],
        answer: "We build custom, production-ready Machine Learning systems for predictive intelligence, NLP, computer vision, and recommendation engines to automate and scale your business.",
        category: 'service',
    },
    {
        id: 'ai-marketing',
        keywords: ['marketing', 'digital marketing', 'ads', 'seo', 'campaigns'],
        answer: "Our AI Digital Marketing service uses predictive analytics and behavioral targeting to maximize ROI. We optimize SEO, paid ads, and conversion rates in real-time.",
        category: 'service',
    },
    {
        id: 'chatbots',
        keywords: ['chatbot', 'bot', 'support bot', 'automated support'],
        answer: "We develop intelligent AI Chatbots that provide 24/7 support, capture leads, and integrate with your CRM. They understand natural language and drive conversions.",
        category: 'service',
    },
    {
        id: 'graphic-design',
        keywords: ['graphic design', 'design', 'thumbnails', 'visuals', 'branding'],
        answer: "Our Graphic Design service creates high-impact visuals, YouTube thumbnails, ad creatives, and brand assets engineered to stop the scroll and capture attention.",
        category: 'service',
    },
    {
        id: 'content-writing',
        keywords: ['content', 'writing', 'copywriting', 'blogs', 'articles'],
        answer: "We provide SEO-optimized Content Writing that ranks and converts. From website copy to long-form blogs, our content is driven by intent research and conversion psychology.",
        category: 'service',
    },
    {
        id: 'business-automation',
        keywords: ['automation', 'workflows', 'crm', 'efficiency'],
        answer: "Our Business Automation solutions leverage AI and ML to streamline operations, eliminate manual tasks, and scale your systems effortlessly.",
        category: 'service',
    },
    {
        id: 'ar-vr',
        keywords: ['ar', 'vr', '3d', 'augmented reality', 'virtual reality', 'metaverse'],
        answer: "We create immersive AR, VR, and 3D experiences, including product visualizations and virtual showrooms, allowing your customers to interact with your brand in new dimensions.",
        category: 'service',
    },

    // Contact
    {
        id: 'contact-general',
        keywords: ['contact', 'reach out', 'email', 'phone', 'call', 'talk'],
        answer: "You can reach us at neura.mark.officialmail@gmail.com or call us at 8433541311. We'd love to discuss your project!",
        category: 'contact',
    },
    {
        id: 'location',
        keywords: ['location', 'where', 'address', 'office'],
        answer: "We are located in Mumbai, India.",
        category: 'contact',
    },
    {
        id: 'cost',
        keywords: ['cost', 'price', 'pricing', 'quote', 'rates'],
        answer: "Our pricing is tailored to each project's specific needs and scale. Please contact us for a detailed quote based on your requirements.",
        category: 'contact',
    },
];
