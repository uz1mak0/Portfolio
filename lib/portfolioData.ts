export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  skills: string[];
  description: string;
  metrics: { label: string; value: string }[];
  architectureOverview: string;
  keyFeatures: string[];
  workflowSteps?: { title: string; desc: string; tool: string }[];
  githubUrl?: string;
  liveDemoUrl?: string;
  accentColor: string;
  badge: string;
  demoType: 'travel' | 'toda';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon: string;
    highlight?: boolean;
    description: string;
  }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Ryan Lorenton Barcebal",
    role: "Full Stack Developer / AI Engineer",
    email: "itzy4n6@gmail.com",
    availability: "Available for High-Impact Roles & Consulting",
    tagline: "Engineering resilient full-stack systems, automated AI workflows, and cloud architectures for global-scale performance.",
    bio: "Full Stack Developer and AI Engineer specializing in TypeScript, Next.js, Serverless AWS ecosystems, and automated AI orchestration. Passionate about building enterprise logistics suites, high-throughput n8n automation pipelines, and modern intelligent web systems.",
    location: "Global / Remote",
    stats: [
      { label: "AI Workflows & Services", value: "Multi-Agent" },
      { label: "Core Architecture", value: "Next.js & AWS" },
      { label: "Automations Deployed", value: "100k+ Runs" },
      { label: "System Uptime & Reliability", value: "99.98%" }
    ]
  },

  skillsGrouped: [
    {
      title: "Core Languages & Frameworks",
      description: "Frontend & Full Stack foundations for reactive, high-performance web applications",
      skills: [
        { name: "TypeScript", level: "Expert", icon: "Code2", highlight: true, description: "Strict type systems, generative abstractions, robust enterprise scale" },
        { name: "JavaScript", level: "Expert", icon: "FileCode", highlight: true, description: "ESNext standards, asynchronous concurrency, event loop optimization" },
        { name: "Next.js", level: "Expert", icon: "Globe", highlight: true, description: "App Router, SSR, Server Actions, Edge middleware, RSC architectures" },
        { name: "React", level: "Expert", icon: "Layers", highlight: true, description: "Modern hooks, concurrent UI rendering, responsive state management" },
        { name: "Node.js", level: "Advanced", icon: "Server", highlight: true, description: "High-throughput microservices, streams, event-driven backends" }
      ]
    },
    {
      title: "Cloud, Backend & Infrastructure",
      description: "Scalable compute, serverless backends, and decoupled GraphQL APIs",
      skills: [
        { name: "Amazon Web Services", level: "Advanced", icon: "Cloud", highlight: true, description: "Lambda, S3, CloudFront, DynamoDB, API Gateway, EventBridge" },
        { name: "Serverless Framework", level: "Advanced", icon: "Zap", highlight: true, description: "Infrastructure-as-Code, event routing, auto-scaling FaaS" },
        { name: "GraphQL", level: "Advanced", icon: "Network", highlight: true, description: "Schema design, Apollo/Yoga servers, optimized query resolvers" },
        { name: "REST & Webhooks", level: "Expert", icon: "ArrowLeftRight", description: "Idempotent endpoints, rate-limiting, secure HMAC signatures" },
        { name: "Distributed Systems", level: "Advanced", icon: "Cpu", description: "Message queues, worker pools, caching strategies & edge delivery" }
      ]
    },
    {
      title: "AI Tools & Intelligent Agents",
      description: "Next-generation model integration, prompt engineering, and visual workflow automation",
      skills: [
        { name: "Gemini AI", level: "Advanced", icon: "Sparkles", highlight: true, description: "Multimodal reasoning, structured JSON schemas, high-speed context" },
        { name: "Google AI Studio", level: "Advanced", icon: "Bot", highlight: true, description: "Prototyping, prompt tuning, system directives, API orchestration" },
        { name: "Claude Code", level: "Advanced", icon: "Terminal", highlight: true, description: "Agentic coding workflows, automated refactoring, terminal automation" },
        { name: "n8n Automation", level: "Advanced", icon: "Workflow", highlight: true, description: "Enterprise orchestration, webhook triggers, multi-node AI pipelines" }
      ]
    }
  ],

  projects: [
    {
      id: "toda-management-system",
      title: "TODA Management System",
      category: "Logistics & Fleet Operations",
      tagline: "Comprehensive digital dispatch, driver remittance, boundary tracking, and shift analytics for transport organizations.",
      skills: ["JavaScript", "TypeScript", "Google AI Studio", "React", "NextJS", "Fleet Analytics"],
      description: "An operational management and analytics system tailored for Tricycle Operators and Drivers' Associations (TODA). Monitors driver performances, daily boundary dues, remittances, automated shift time-in and time-out tracking, and utilizes Google AI Studio assistance for predictive route optimization and fleet income analytics.",
      metrics: [
        { label: "Driver Compliance", value: "98.4%" },
        { label: "Remittance Accuracy", value: "100%" },
        { label: "Shift Tracking", value: "Real-time" }
      ],
      architectureOverview: "Next.js administrative dashboard interfacing with Google AI Studio for schedule forecasting, terminal load predictions, and remittance reconciliation. Includes driver verification modules, boundary status counters, and instant operational reports.",
      keyFeatures: [
        "Automated daily boundary dues tracking and real-time remittance status verification",
        "Digital driver time-in and time-out logging with terminal queue management",
        "Google AI Studio integration for forecasting rush-hour demand and dispatch recommendations",
        "Driver safety & compliance scoring with historical performance logs",
        "Instant export of daily association financial audits and boundary balance sheets"
      ],
      accentColor: "#10b981",
      badge: "Civic & Logistics",
      githubUrl: "https://github.com/uz1mak0/toda-management-system.git",
      liveDemoUrl: "https://uz1mak0.github.io/toda-management-system/",
      demoType: "toda"
    },
    {
      id: "travel-itinerary-generator",
      title: "Automated Travel Itinerary Generator",
      category: "AI & Workflow Automation",
      tagline: "Global vacation planner powered by n8n workflow engine and Gemini AI with instant dual-channel delivery.",
      skills: ["JavaScript", "TypeScript", "React", "NextJS", "n8n", "Gemini AI", "SMS & Email Webhooks"],
      description: "A high-scale full stack system with an automated n8n workflow architecture designed to serve millions of travelers worldwide. With a single click, the system queries multimodal travel parameters, computes affordable, comfortable, and safe accommodations and routes, and dispatches rich personalized itineraries directly to user email inboxes and registered phone numbers.",
      metrics: [
        { label: "Dispatch Latency", value: "< 2.8s" },
        { label: "Global Coverage", value: "190+ Countries" },
        { label: "Delivery Channels", value: "Email & SMS" }
      ],
      architectureOverview: "Client UI built on Next.js 15 App Router captures traveler constraints (budget, safety index, dates, vibe) and triggers an n8n webhook orchestration pipeline. The workflow invokes Google Gemini AI for contextual curation, enriches destination safety matrices, and triggers concurrent SMTP and SMS notification gateways.",
      keyFeatures: [
        "One-click intelligent itinerary synthesis matching exact budget and comfort constraints",
        "Automated dual-channel delivery sending formatted HTML summaries to email and instant SMS alerts",
        "n8n visual node engine connecting weather APIs, budget calculators, and safety indexes",
        "Real-time safety scoring algorithm analyzing district ratings and travel advisories",
        "Serverless execution model with resilient retry queues and error fallbacks"
      ],
      workflowSteps: [
        { title: "User Preference Ingestion", desc: "Captures traveler dates, budget bracket, safety requirements, and vibe through Next.js frontend.", tool: "Next.js UI" },
        { title: "n8n Webhook Trigger", desc: "Dispatches payload securely to n8n workflow router with cryptographic token verification.", tool: "n8n Node" },
        { title: "Gemini Intelligence Engine", desc: "Generates tailored daily itineraries, route maps, food stops, and budget allocation summaries.", tool: "Google Gemini" },
        { title: "Dual Multi-Channel Dispatch", desc: "Formats PDF/HTML summaries to user's inbox while dispatching key check-in alerts via SMS.", tool: "SMTP & SMS" }
      ],
      accentColor: "#38bdf8",
      badge: "Flagship AI Project",
      githubUrl: "https://github.com/uz1mak0/yan-ravel.git",
      liveDemoUrl: "https://uz1mak0.github.io/yan-ravel/",
      demoType: "travel"
    }
  ] as Project[],

  architectureHighlights: [
    {
      name: "Serverless & Cloud Native",
      icon: "CloudRain",
      desc: "Architecting zero-maintenance auto-scaling backends on AWS Lambda, API Gateway, and CloudFront."
    },
    {
      name: "Autonomous AI Pipelines",
      icon: "Cpu",
      desc: "Connecting Gemini models with visual orchestration engines like n8n for real-time data enrichment."
    },
    {
      name: "Full Stack Type Safety",
      icon: "ShieldCheck",
      desc: "End-to-end typed contracts spanning Next.js Server Actions, GraphQL schemas, and client state."
    },
    {
      name: "High Reliability & Speed",
      icon: "Zap",
      desc: "Sub-second edge caching, optimistic client rendering, and non-blocking asynchronous worker queues."
    }
  ]
};
