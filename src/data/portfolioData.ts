export interface Mascot {
  id: 'strato' | 'adzy' | 'soci' | 'cody';
  name: string;
  role: string;
  subtitle: string;
  tagline: string;
  colorName: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  badgeBg: string;
  image: string;
  description: string;
  personality: string;
  specialties: string[];
  tools: string[];
  deliverables: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  mascotAffiliation: 'strato' | 'adzy' | 'soci' | 'cody';
  keyOutcomes: string[];
  deliverables: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Aida',
    fullName: 'Aida Siavoshi',
    title: 'Digital Marketing & Creative Strategy',
    subTitle: 'Digital Marketing Specialist · Marketing Strategist · Social Media & Advertising · AI & Automation',
    location: 'Dubai, United Arab Emirates',
    currentRole: 'Digital Marketing Specialist at Shape Zoom Polyclinic',
    experienceYears: 'Active Professional Practice in Dubai (2024 – Present)',
    whatsappNumber: '+971542850423',
    whatsappLink: 'https://wa.me/971542850423',
    email: 'siavoshi.aida@gmail.com',
    missionStatement: 'Where Strategy Meets Creativity, and Little Monsters Make Big Ideas Happen.',
  },

  about: {
    lead: "I am Aida, a digital marketing specialist and creative strategist based in Dubai, operating at the crossroads of market intelligence, compelling brand narrative, performance paid media, and artificial intelligence.",
    bodyParagraphs: [
      "Since early 2024, I have led and executed high-impact digital marketing initiatives at Shape Zoom Polyclinic in Dubai. My day-to-day spans full-funnel marketing strategy, paid acquisition on Meta and Snapchat, patient journey mapping, content production direction, and establishing a reputable, premium brand footprint in the UAE.",
      "My core philosophy is simple: effective marketing is never about empty impressions or vanity noise. It is about creating genuine connection with the target audience, establishing unmistakable positioning, and systematically converting qualified interest into sustainable commercial revenue.",
      "Beyond traditional growth tactics, I actively leverage modern generative AI and no-code automation systems to eliminate operational friction, test creative angles rapidly, and unlock high-converting marketing solutions for modern businesses."
    ],
    principles: [
      {
        title: 'Strategy First',
        description: 'Every initiative begins with an exhaustive understanding of business unit economics, audience behavior, competitor positioning, and explicit commercial objectives.',
      },
      {
        title: 'Creativity Matters',
        description: 'In noisy digital feeds, distinct visual aesthetics and authentic storytelling turn casual scrollers into emotionally invested brand champions.',
      },
      {
        title: 'Data-Driven Decisions',
        description: 'Creativity is validated by rigorous analytics, systematic conversion tracking, continuous split testing, and disciplined ROAS optimization.',
      },
      {
        title: 'Technology & Innovation',
        description: 'Deploying generative AI and workflow automation frees human energy to focus on high-leverage strategic and creative breakthroughs.',
      },
    ]
  },

  experience: {
    company: 'Shape Zoom Polyclinic',
    location: 'Dubai, UAE',
    role: 'Digital Marketing Specialist & Growth Strategist',
    period: '2024 – Present',
    description: 'Leading comprehensive digital marketing, patient acquisition channels, social brand positioning, and advertising campaigns across the competitive UAE aesthetic and polyclinic landscape.',
    responsibilities: [
      'Formulating and executing holistic digital marketing strategies aligned with clinic revenue and patient acquisition goals.',
      'Conducting competitive benchmarking and audience segmentation across Dubai’s premium wellness and aesthetics sector.',
      'Managing and scaling paid advertising campaigns across Meta Ads (Instagram & Facebook) and Snapchat Ads with disciplined budget allocations.',
      'Directing social media editorial calendars, visual guidelines, and high-engagement short-form video content production (Reels, TikTok & stories).',
      'Architecting conversion-optimized promotional landing pages, lead capture funnels, and patient consultation intake paths.',
      'Analyzing multi-channel ad performance, engagement metrics, inbound WhatsApp inquiries, and cost-per-lead (CPL) efficiency.',
      'Integrating generative AI tools (ChatGPT, Gemini, Claude, AI image models) and automation pipelines for creative ideation, ad copy testing, and reporting.'
    ]
  },

  creativeCrew: [
    {
      id: 'strato',
      name: 'Strato',
      role: 'Strategy & Growth',
      subtitle: 'The Strategic Thinker',
      tagline: 'Look ahead, ask the deep questions, and chart the winning roadmap.',
      colorName: 'Mint Emerald',
      accentBg: 'bg-emerald-50 dark:bg-emerald-950/30',
      accentBorder: 'border-emerald-200 dark:border-emerald-800',
      accentText: 'text-emerald-700 dark:text-emerald-300',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      image: '/src/assets/images/mascot_strato_1791654791123.jpg',
      personality: 'A thoughtful mint-green fuzzy monster wearing round spectacles and tiny brown horns. Strato is the analytical brain of the crew—he questions every assumption, investigates competitor landscape, and designs rock-solid market positioning before spending a single dollar.',
      description: 'Strato safeguards business longevity. He maps target personas, uncovers underserved market segments, sets KPI benchmarks, and makes sure marketing connects directly with real-world revenue goals.',
      specialties: [
        'Digital Marketing Strategy',
        'Market & Competitor Research',
        'Target Audience Segmentation',
        'Brand Positioning & USP',
        'Customer Acquisition Funnels',
        'Growth Planning & Budgeting'
      ],
      tools: ['Market Intelligence', 'Customer Persona Maps', 'SWOT Matrices', 'NotebookLM', 'Funnel Architectures'],
      deliverables: ['Quarterly Growth Roadmaps', 'Competitor Intelligence Reports', 'Audience Personas & ICP Blueprints', 'Marketing Budget Frameworks']
    },
    {
      id: 'adzy',
      name: 'Adzy',
      role: 'Marketing & Advertising',
      subtitle: 'The Advertising Enthusiast',
      tagline: 'Put the right hook in front of the right eyes and ignite performance.',
      colorName: 'Warm Amber',
      accentBg: 'bg-amber-50 dark:bg-amber-950/30',
      accentBorder: 'border-amber-200 dark:border-amber-800',
      accentText: 'text-amber-700 dark:text-amber-300',
      badgeBg: 'bg-amber-100 text-amber-800',
      image: '/src/assets/images/mascot_adzy_1791654802044.jpg',
      personality: 'The spark of high energy! A fuzzy bright orange monster with colorful confetti spots, three wide-open curious eyes, and a megaphone. Adzy is all about action, performance ads, lead generation, and ROAS.',
      description: 'Adzy ensures that captivating ideas turn into commercial results. He loves testing creative variations, targeting the exact right audiences on Meta and Snapchat, and optimizing ad spend for maximum conversion.',
      specialties: [
        'Performance Marketing',
        'Meta Ads (Facebook & Instagram)',
        'Snapchat Ads Manager',
        'Lead Generation Campaigns',
        'Ad Creative & Hook Testing',
        'Retargeting & Audience Exclusions'
      ],
      tools: ['Meta Ads Manager', 'Snapchat Ads', 'Pixel & Event Tracking', 'A/B Testing Frameworks', 'TikTok Ads'],
      deliverables: ['Multi-Tier Paid Media Campaigns', 'High-Converting Ad Creatives', 'Audience Retargeting Engines', 'Lead Acquisition Optimization']
    },
    {
      id: 'soci',
      name: 'Soci',
      role: 'Social Media & Content',
      subtitle: 'The Creative Soul',
      tagline: 'Capture cultural moments and build genuine community affinity.',
      colorName: 'Rose Petal',
      accentBg: 'bg-rose-50 dark:bg-rose-950/30',
      accentBorder: 'border-rose-200 dark:border-rose-800',
      accentText: 'text-rose-700 dark:text-rose-300',
      badgeBg: 'bg-rose-100 text-rose-800',
      image: '/src/assets/images/mascot_soci_1791654813570.jpg',
      personality: 'The heart and warmth of the brand. A soft pink fluffy monster with three soulful eyes and a vintage camera in hand. Soci loves cultural aesthetics, visual storytelling, and human connection.',
      description: 'Soci bridges the gap between commercial services and human emotion. She crafts thoughtful content calendars, directs reel narratives, designs aesthetic feeds, and sparks authentic customer conversations.',
      specialties: [
        'Social Media Management',
        'Content Strategy & Planning',
        'Visual Identity & Direction',
        'Short-Form Video & Reels',
        'Brand Narrative & Tone of Voice',
        'Community Engagement'
      ],
      tools: ['Canva Pro', 'Adobe Photoshop', 'CapCut Video Studio', 'Instagram Algorithm Strategy', 'Content Calendars'],
      deliverables: ['Monthly Editorial Calendars', 'Reels & Video Storyboards', 'Social Grid Visual Direction', 'Engaging Brand Copywriting']
    },
    {
      id: 'cody',
      name: 'Cody',
      role: 'AI & Automation',
      subtitle: 'The Little Tech Genius',
      tagline: 'Automate the tedious, scale the brilliant, and build the future.',
      colorName: 'Cyan Tech',
      accentBg: 'bg-sky-50 dark:bg-sky-950/30',
      accentBorder: 'border-sky-200 dark:border-sky-800',
      accentText: 'text-sky-700 dark:text-sky-300',
      badgeBg: 'bg-sky-100 text-sky-800',
      image: '/src/assets/images/mascot_cody_1791654825644.jpg',
      personality: 'A compact, plush cream-colored tech prodigy with glowing cyan antennae and friendly digital eyes. Cody has no arms because he commands computers with pure thought and smart workflows.',
      description: 'Cody unlocks hyper-efficiency. He builds no-code automation sequences with Make.com, uses LLMs for research and variant copy generation, and weaves AI into marketing operations to multiply productivity.',
      specialties: [
        'Marketing Automation & Workflows',
        'Generative AI for Marketing',
        'No-Code Pipelines (Make.com)',
        'AI Prompt Architecture',
        'AI Image & Asset Generation',
        'Workflow Optimization'
      ],
      tools: ['Make.com', 'ChatGPT & GPT-4o', 'Google Gemini', 'Claude 3.7', 'Midjourney & AI Image Engines'],
      deliverables: ['Automated Lead Notification Bots', 'AI Creative Ideation Pipelines', 'Repetitive Task Elimination Workflows', 'Smart Data Summarization']
    }
  ] as Mascot[],

  services: [
    {
      id: 'marketing-strategy',
      title: 'Marketing Strategy & Growth Roadmapping',
      mascotAffiliation: 'strato',
      shortDesc: 'Comprehensive market research, competitor benchmarking, audience profiling, and actionable roadmaps built to achieve commercial business goals.',
      keyOutcomes: [
        'Clear brand positioning in saturated markets',
        'Targeted customer acquisition roadmaps',
        'Disciplined budget allocation across channels'
      ],
      deliverables: ['Market Research Briefs', 'Competitor Gap Analyses', 'Full-Year Campaign Calendars', 'KPI & ROAS Target Frameworks']
    },
    {
      id: 'digital-advertising',
      title: 'Performance Marketing & Paid Advertising',
      mascotAffiliation: 'adzy',
      shortDesc: 'End-to-end setup, management, and continuous optimization of Meta Ads (Facebook & Instagram) and Snapchat Ads focused on lead generation and high conversion rates.',
      keyOutcomes: [
        'Lower Cost-Per-Acquisition (CPA)',
        'Scalable inbound patient/client inquiries',
        'Predictable pipeline generation'
      ],
      deliverables: ['Meta & Snapchat Ad Campaigns', 'Ad Creative Strategy & Copy Variations', 'Pixel & Custom Event Setup', 'Weekly Performance Reports']
    },
    {
      id: 'social-media',
      title: 'Social Media Management & Content Strategy',
      mascotAffiliation: 'soci',
      shortDesc: 'Strategic social presence management, content ideation, reels and short-form video planning, monthly calendars, and visual direction that builds real brand affinity.',
      keyOutcomes: [
        'Cohesive, premium visual brand feed',
        'Higher organic reach and engagement rate',
        'Consistent and stress-free content publishing cadence'
      ],
      deliverables: ['Monthly Editorial Calendars', 'Short-form Video Concept Scripts', 'Post Designs & Captions', 'Community Engagement Protocols']
    },
    {
      id: 'branding-creative',
      title: 'Branding & Creative Direction',
      mascotAffiliation: 'soci',
      shortDesc: 'Developing distinctive brand identities, creative campaign concepts, visual storytelling styles, and tone of voice that make your business instantly recognizable.',
      keyOutcomes: [
        'Unforgettable brand recognition',
        'Emotional resonance with high-value clients',
        'Consistent aesthetic across all touchpoints'
      ],
      deliverables: ['Brand Tone & Style Guides', 'Campaign Concept Decks', 'Creative Production Briefs', 'Visual Asset Art Direction']
    },
    {
      id: 'ai-automation',
      title: 'AI Integration & Marketing Automation',
      mascotAffiliation: 'cody',
      shortDesc: 'Leveraging cutting-edge generative AI models and no-code tools like Make.com to automate lead qualification, content repurposing, and routine marketing workflows.',
      keyOutcomes: [
        'Save 15+ hours weekly on manual tasks',
        'Faster turnaround on creative testing',
        'Instant lead-to-WhatsApp notifications'
      ],
      deliverables: ['No-Code Workflow Integrations', 'Custom AI Prompt Libraries', 'Automated Lead Alert Systems', 'AI Content Generation Workflows']
    },
    {
      id: 'analytics-optimization',
      title: 'Marketing Analytics & Funnel Optimization',
      mascotAffiliation: 'strato',
      shortDesc: 'Auditing ad metrics, user behavior, and landing page drop-offs to implement conversion rate optimization (CRO) and maximize return on every marketing dollar.',
      keyOutcomes: [
        'Elimination of marketing budget leakage',
        'Increased visitor-to-inquiry conversion rates',
        'Transparent executive dashboard reporting'
      ],
      deliverables: ['Landing Page Conversion Audits', 'Multi-Channel Attribution Reviews', 'A/B Testing Experiments', 'Monthly ROI & CPL Dashboards']
    }
  ] as ServiceItem[],

  skillCategories: [
    {
      id: 'strategy',
      title: 'Digital Marketing Strategy & Growth',
      skills: [
        'Digital Marketing Strategy',
        'Marketing Planning',
        'Market Research',
        'Competitor Analysis',
        'Target Audience Analysis',
        'Customer Segmentation',
        'Brand Positioning',
        'Growth Marketing',
        'Customer Acquisition Strategy',
        'Marketing Funnel Architecture',
        'Campaign Strategy & Planning',
        'Marketing Budget Planning',
        'KPI Monitoring & Optimization'
      ]
    },
    {
      id: 'advertising',
      title: 'Performance Marketing & Digital Advertising',
      skills: [
        'Performance Marketing',
        'Paid Media Strategy',
        'Meta Ads Management',
        'Facebook & Instagram Advertising',
        'Snapchat Advertising',
        'TikTok Advertising Strategy',
        'Lead Generation Campaigns',
        'Audience Targeting & Segmentation',
        'Campaign Budget Optimization (CBO)',
        'Advertising Creative Strategy',
        'Campaign Performance Analysis',
        'Conversion Optimization Strategy',
        'Retargeting & Custom Audiences'
      ]
    },
    {
      id: 'social',
      title: 'Social Media Management & Content Strategy',
      skills: [
        'Social Media Marketing',
        'Social Media Management',
        'Social Media Strategy',
        'Content Strategy',
        'Content Planning',
        'Content Calendar Development',
        'Creative Content Ideation',
        'Creative Direction',
        'Instagram Marketing',
        'TikTok Content Strategy',
        'Snapchat Marketing',
        'Reels & Short-Form Video Planning',
        'Visual Content Strategy',
        'Social Media Performance Analysis',
        'Brand Communication',
        'Content Production Coordination'
      ]
    },
    {
      id: 'branding',
      title: 'Branding & Creative Strategy',
      skills: [
        'Brand Strategy',
        'Brand Positioning',
        'Brand Identity Development',
        'Creative Strategy',
        'Creative Direction',
        'Visual Branding',
        'Brand Communication Strategy',
        'Campaign Concept Development',
        'Brand Awareness Campaigns',
        'Creative Project Planning'
      ]
    },
    {
      id: 'ai-automation',
      title: 'AI & Marketing Automation',
      skills: [
        'AI-Powered Marketing',
        'Generative AI for Marketing',
        'AI-Assisted Content Creation',
        'AI Image Generation',
        'AI Creative Ideation',
        'AI-Assisted Research',
        'Marketing Automation',
        'Workflow Automation',
        'No-Code Automation',
        'AI Tools Integration',
        'Marketing Process Optimization'
      ]
    },
    {
      id: 'analytics',
      title: 'Analytics & Optimization',
      skills: [
        'Digital Marketing Analytics',
        'Campaign Performance Monitoring',
        'Marketing KPI Analysis',
        'Audience Behavior Analysis',
        'Advertising Performance Evaluation',
        'Lead Generation Performance Analysis',
        'Marketing Funnel Analysis',
        'Data-Driven Decision Making',
        'Campaign Testing & Optimization'
      ]
    }
  ] as SkillCategory[],

  toolsMatrix: [
    {
      category: 'Advertising & Social Media',
      items: [
        { name: 'Meta Ads Manager', role: 'Campaign scaling, lookalike targeting & CBO' },
        { name: 'Facebook Ads', role: 'Feed, story & marketplace audience acquisition' },
        { name: 'Instagram Ads', role: 'High-aesthetic visual & reel promotion' },
        { name: 'Snapchat Ads', role: 'Story ads, commercial spotlight & regional reach' },
        { name: 'TikTok', role: 'Short-form visual trends & viral awareness' }
      ]
    },
    {
      category: 'Design & Content Creation',
      items: [
        { name: 'Canva Pro', role: 'Rapid social asset production & brand kits' },
        { name: 'Adobe Photoshop', role: 'High-end photo manipulation & campaign key art' },
        { name: 'CapCut Studio', role: 'Dynamic reels, subtitle timing & pacing' },
        { name: 'AI Image Tools', role: 'Custom visual concept generation & mockups' }
      ]
    },
    {
      category: 'AI & Productivity',
      items: [
        { name: 'ChatGPT / GPT-4o', role: 'Ad copy variant testing & prompt development' },
        { name: 'Google Gemini', role: 'Multimodal research & live search analysis' },
        { name: 'Claude 3.7', role: 'Long-form strategic synthesis & content tone shaping' },
        { name: 'NotebookLM', role: 'Grounded document synthesis & competitor study' }
      ]
    },
    {
      category: 'Automation & Workflows',
      items: [
        { name: 'Make.com', role: 'Automated multi-step webhooks & lead routing' },
        { name: 'AI Automation Tools', role: 'Automated transcription & content summarization' },
        { name: 'No-Code Workflows', role: 'Connecting ad leads directly to WhatsApp & CRM' }
      ]
    },
    {
      category: 'Web & Conversion Infrastructure',
      items: [
        { name: 'Landing Page Strategy', role: 'Conversion architecture & customer friction reduction' },
        { name: 'Funnel Planning', role: 'Multi-stage lead nurturing from impression to consultation' },
        { name: 'Conversion-Focused Structure', role: 'Clear CTAs, trust signals & mobile checkout design' }
      ]
    }
  ]
};
