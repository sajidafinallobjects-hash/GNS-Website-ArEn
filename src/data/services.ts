import { BrainCircuit, Cpu, ScanSearch, Sparkles, Zap, Code2 } from 'lucide-react';
import type { Service } from '@/types';

export const services: Service[] = [
  {
    icon: BrainCircuit,
    title: 'Artificial Intelligence',
    shortDescription: 'Building intelligent systems designed to solve complex real-world problems.',
    description: 'We design and deploy AI systems that solve meaningful business challenges — from reasoning engines and decision-support platforms to intelligent agents that adapt and improve over time. Our AI solutions are built to be explainable, reliable and production-ready.',
    capabilities: ['Intelligent agents', 'Decision-support systems', 'AI strategy & architecture', 'Model evaluation & deployment', 'AI system integration'],
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    shortDescription: 'Turning data into predictive models and intelligent decision-making systems.',
    description: 'We build machine learning models that turn your data into a competitive advantage — from predictive analytics and forecasting to classification and recommendation systems. Our models are engineered for accuracy, interpretability and real-world performance.',
    capabilities: ['Predictive analytics', 'Forecasting models', 'Classification & recommendation', 'Model training & tuning', 'MLOps & deployment'],
  },
  {
    icon: ScanSearch,
    title: 'Computer Vision',
    shortDescription: 'Creating AI systems that understand and analyze visual information.',
    description: 'We build computer vision systems that extract meaning from visual data — from image classification and object detection to medical imaging and real-time video analysis. Our solutions combine deep learning with intuitive interfaces for practical, real-world use.',
    capabilities: ['Image classification', 'Object detection', 'Medical imaging', 'Video analysis', 'Visual quality inspection'],
  },
  {
    icon: Sparkles,
    title: 'Generative AI',
    shortDescription: 'Building next-generation applications powered by modern generative models.',
    description: 'We build applications powered by generative AI — from intelligent content generation and conversational interfaces to custom model fine-tuning and retrieval-augmented systems. Our generative AI solutions are designed to be practical, controllable and grounded in your data.',
    capabilities: ['Conversational AI', 'Content generation', 'RAG systems', 'Model fine-tuning', 'AI-powered search'],
  },
  {
    icon: Zap,
    title: 'Intelligent Automation',
    shortDescription: 'Combining AI and automation to make processes smarter and more efficient.',
    description: 'We combine AI with automation to build systems that do not just repeat tasks — they understand, decide and improve. From intelligent document processing to AI-driven workflows, we make operations smarter, faster and more adaptive.',
    capabilities: ['Intelligent document processing', 'AI-driven workflows', 'Process optimization', 'Smart data extraction', 'Automated decisioning'],
  },
  {
    icon: Code2,
    title: 'AI Application Development',
    shortDescription: 'Turning ideas into complete, practical AI-powered applications.',
    description: 'We turn AI concepts into complete, production-ready applications. From model integration and API design to full-stack development and deployment, we build AI-powered software that fits seamlessly into your operations and delivers measurable value.',
    capabilities: ['Full-stack AI applications', 'Model integration & APIs', 'AI-powered platforms', 'Real-time inference systems', 'End-to-end deployment'],
  },
];
