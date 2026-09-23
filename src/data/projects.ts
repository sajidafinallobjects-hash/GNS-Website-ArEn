import {
  BrainCircuit,
  BarChart3,
  ShoppingBag,
  Landmark,
  Factory,
} from 'lucide-react';

import type { ProjectCaseStudy } from '@/types';

export const projects: ProjectCaseStudy[] = [
  {
    slug: 'dermavision-ai',
    title: 'DermaVision AI',
    category: 'Artificial Intelligence / Computer Vision / Healthcare',
    tagline: 'AI-powered skin lesion analysis and clinical decision support',

    description:
      'An AI-powered system that analyzes skin lesion images and predicts the most likely diagnosis, designed as a decision-support and clinical-assistance tool for dermatology professionals.',

    overview:
      'DermaVision AI is a full-stack AI platform for skin lesion classification and clinical decision support. It combines a pretrained EfficientNet-based deep learning model with a React frontend, FastAPI backend and database integration.',

    challenge:
      'Early detection and classification of suspicious skin lesions can be challenging and typically requires expert assessment. The project focuses on building an AI-assisted system that can analyze lesion images, provide confidence scores and make its reasoning more transparent.',

    solution:
      'A full-stack AI platform built around a pretrained EfficientNet-based deep learning model trained using HAM10000 and ISIC 2019 datasets. The platform combines AI inference, FastAPI, React, PostgreSQL and Grad-CAM explainability into one integrated workflow.',

    technologies: [
      'Python',
      'PyTorch',
      'EfficientNet',
      'FastAPI',
      'React',
      'PostgreSQL',
      'Grad-CAM',
      'HAM10000',
      'ISIC 2019',
    ],

    features: [
      {
        title: 'AI image prediction',
        description:
          'Analyzes uploaded skin lesion images and predicts the most likely diagnosis across seven lesion categories.',
      },
      {
        title: 'Seven-class classification',
        description:
          'Classifies lesions into AKIEC, BCC, BKL, DF, MEL, NV and VASC categories.',
      },
      {
        title: 'Confidence score',
        description:
          'Provides confidence information for each prediction.',
      },
      {
        title: 'Grad-CAM explainability',
        description:
          'Highlights image regions that influenced the model prediction.',
      },
      {
        title: 'Patient history',
        description:
          'Maintains patient information, predictions and case history within the platform.',
      },
      {
        title: 'Medical reporting',
        description:
          'Generates structured reports combining patient information and AI results.',
      },
    ],

    results: [
      { label: 'AI model', value: 'EfficientNet' },
      { label: 'Classification', value: '7 categories' },
      { label: 'Dataset', value: 'HAM10000 + ISIC 2019' },
      { label: 'Explainability', value: 'Grad-CAM' },
    ],

    featured: true,
    icon: BrainCircuit,
  },

  {
    slug: 'intelligent-financial-analytics',
    title: 'Intelligent Financial Analytics',
    category: 'Data Science / Machine Learning / Finance',
    tagline: 'Turning complex financial data into actionable intelligence',

    description:
      'A representative AI and data analytics solution designed to transform financial data into meaningful insights, predictive indicators and automated reporting.',

    overview:
      'This representative case study demonstrates how GNS can combine data engineering, machine learning and analytics into an intelligent financial decision-support workflow.',

    challenge:
      'Financial teams often work with large volumes of structured data that can be difficult to interpret quickly. The challenge is to turn raw information into clear insights that support better operational and strategic decisions.',

    solution:
      'A data-driven analytics platform combining data preparation, machine learning models, interactive dashboards and automated reporting workflows.',

    technologies: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'Machine Learning',
      'PostgreSQL',
      'Data Visualization',
    ],

    features: [
      {
        title: 'Data analytics',
        description:
          'Transforms structured financial datasets into meaningful analytical insights.',
      },
      {
        title: 'Predictive modeling',
        description:
          'Uses machine learning to identify patterns and generate predictive indicators.',
      },
      {
        title: 'Interactive dashboards',
        description:
          'Presents key metrics and trends through clear visual dashboards.',
      },
      {
        title: 'Automated reporting',
        description:
          'Supports automated generation of recurring analytical reports.',
      },
    ],

    results: [
      { label: 'Focus', value: 'Financial analytics' },
      { label: 'Approach', value: 'Machine Learning' },
      { label: 'Data', value: 'Structured datasets' },
      { label: 'Output', value: 'Insights & reports' },
    ],

    featured: false,
    icon: BarChart3,
  },

  {
    slug: 'retail-intelligence-platform',
    title: 'Retail Intelligence Platform',
    category: 'Artificial Intelligence / Retail / Data Analytics',
    tagline: 'Data-driven intelligence for modern retail operations',

    description:
      'A representative retail intelligence solution designed to help businesses understand sales patterns, customer behavior and operational trends.',

    overview:
      'The platform concept combines data analytics and machine learning to create a centralized view of retail performance and customer behavior.',

    challenge:
      'Retail businesses generate large amounts of sales and customer data. Without effective analysis, valuable patterns can remain hidden and operational decisions can become reactive.',

    solution:
      'A centralized intelligence platform that processes retail data, identifies trends and presents actionable insights through interactive analytics.',

    technologies: [
      'Python',
      'Machine Learning',
      'Pandas',
      'PostgreSQL',
      'Data Visualization',
      'AI',
    ],

    features: [
      {
        title: 'Sales intelligence',
        description:
          'Analyzes sales patterns and performance across products and periods.',
      },
      {
        title: 'Customer insights',
        description:
          'Identifies meaningful patterns in customer behavior and purchasing activity.',
      },
      {
        title: 'Trend analysis',
        description:
          'Helps visualize changing demand and business performance.',
      },
      {
        title: 'Business dashboards',
        description:
          'Provides clear dashboards for monitoring important business indicators.',
      },
    ],

    results: [
      { label: 'Industry', value: 'Retail' },
      { label: 'Focus', value: 'Business intelligence' },
      { label: 'Approach', value: 'AI & Analytics' },
      { label: 'Output', value: 'Actionable insights' },
    ],

    featured: false,
    icon: ShoppingBag,
  },

  {
    slug: 'smart-government-data',
    title: 'Smart Government Data',
    category: 'Data Science / Automation / Government',
    tagline: 'Intelligent data workflows for modern public services',

    description:
      'A representative concept demonstrating how intelligent data systems and automation can improve information management and organizational workflows.',

    overview:
      'The solution concept focuses on bringing structured data, automation and analytics together to support organizations managing complex information and processes.',

    challenge:
      'Large organizations often manage information across multiple systems and manual workflows, creating opportunities for delays, duplication and inconsistent reporting.',

    solution:
      'An intelligent data platform combining centralized information management, automated workflows and analytics to support faster access to organizational insights.',

    technologies: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Data Analytics',
      'Automation',
      'Cloud',
    ],

    features: [
      {
        title: 'Data management',
        description:
          'Centralizes structured information for easier access and management.',
      },
      {
        title: 'Workflow automation',
        description:
          'Reduces repetitive manual processes through intelligent automation.',
      },
      {
        title: 'Analytics',
        description:
          'Transforms organizational data into useful operational insights.',
      },
      {
        title: 'Secure architecture',
        description:
          'Designed around structured backend services and controlled data access.',
      },
    ],

    results: [
      { label: 'Focus', value: 'Data management' },
      { label: 'Approach', value: 'Automation' },
      { label: 'Backend', value: 'FastAPI' },
      { label: 'Database', value: 'PostgreSQL' },
    ],

    featured: false,
    icon: Landmark,
  },

  {
    slug: 'industrial-predictive-intelligence',
    title: 'Industrial Predictive Intelligence',
    category: 'Machine Learning / Industrial / Predictive Analytics',
    tagline: 'Using data to understand and anticipate operational patterns',

    description:
      'A representative predictive analytics solution designed to help industrial organizations monitor operations, identify patterns and support data-driven maintenance decisions.',

    overview:
      'The concept combines machine learning and operational data analysis to help organizations understand system behavior and identify potential issues earlier.',

    challenge:
      'Industrial environments generate continuous operational data, but extracting useful patterns from this information can be difficult without dedicated analytical systems.',

    solution:
      'A predictive analytics workflow that processes operational data, identifies patterns and presents relevant indicators through an intelligent monitoring interface.',

    technologies: [
      'Python',
      'Machine Learning',
      'Predictive Analytics',
      'Data Processing',
      'IoT Data',
      'Visualization',
    ],

    features: [
      {
        title: 'Predictive analytics',
        description:
          'Uses historical and operational data to identify meaningful patterns.',
      },
      {
        title: 'Operational monitoring',
        description:
          'Provides visibility into important operational indicators.',
      },
      {
        title: 'Pattern detection',
        description:
          'Helps identify unusual patterns within operational datasets.',
      },
      {
        title: 'Decision support',
        description:
          'Turns analytical findings into information that can support operational decisions.',
      },
    ],

    results: [
      { label: 'Industry', value: 'Industrial' },
      { label: 'Focus', value: 'Predictive analytics' },
      { label: 'Data', value: 'Operational / IoT' },
      { label: 'Approach', value: 'Machine Learning' },
    ],

    featured: false,
    icon: Factory,
  },
];