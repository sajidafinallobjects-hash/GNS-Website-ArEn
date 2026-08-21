import { BrainCircuit } from 'lucide-react';
import type { ProjectCaseStudy } from '@/types';

export const projects: ProjectCaseStudy[] = [
  {
    slug: 'dermavision-ai',
    title: 'DermaVision AI',
    category: 'Artificial Intelligence / Computer Vision / Healthcare',
    tagline: 'AI-powered skin lesion analysis and clinical decision support',
    description: 'An AI-powered system that analyzes skin lesion images and predicts the most likely diagnosis, designed as a decision-support and clinical-assistance tool for dermatology professionals.',
    overview: 'DermaVision AI is a full-stack AI platform for skin lesion classification and clinical decision support. It combines a pretrained EfficientNet-based deep learning model with a React frontend, FastAPI backend and database integration to help medical professionals assess suspicious skin lesions faster. The system classifies lesions across seven categories, provides confidence scores and top predictions, and uses Grad-CAM visualization to explain which regions of each image influenced the model — making the AI reasoning transparent rather than opaque.',
    challenge: 'Early detection and classification of suspicious skin lesions is difficult and typically requires expert dermatological assessment. The challenge was to build a system that could analyze lesion images with a reliable AI model, present predictions with confidence scores, and — critically — explain its reasoning visually so that clinicians can understand and evaluate the model output rather than trusting it blindly.',
    solution: 'A full-stack AI platform built around a pretrained EfficientNet-based deep learning model trained on the HAM10000 and ISIC 2019 datasets, with duplicate-image removal and careful data preprocessing including resizing, augmentation and normalization. The system is served through a FastAPI backend with a React frontend and database integration, forming one cohesive AI inference pipeline. Grad-CAM visualization highlights the image regions that influenced each prediction, making the model explainable and its output trustworthy.',
    technologies: ['Python', 'PyTorch', 'EfficientNet', 'FastAPI', 'React', 'PostgreSQL', 'Grad-CAM', 'HAM10000', 'ISIC 2019'],
    features: [
      { title: 'AI image prediction', description: 'EfficientNet-based deep learning model analyzes uploaded skin lesion images and predicts the most likely diagnosis across seven lesion categories.' },
      { title: 'Seven-class classification', description: 'Classifies lesions into seven categories: AKIEC, BCC, BKL, DF, MEL, NV and VASC.' },
      { title: 'Confidence score', description: 'Each prediction includes a confidence score so clinicians can gauge how strongly the model favors its top diagnosis.' },
      { title: 'Top predictions', description: 'The system shows the top predicted categories ranked by probability, giving clinicians a fuller picture of the model output.' },
      { title: 'Grad-CAM explainability', description: 'Grad-CAM visualization highlights the image regions that most influenced the model prediction, helping clinicians understand and evaluate the AI reasoning.' },
      { title: 'Patient information', description: 'Patient details are captured and managed alongside their lesion images and prediction history within the platform.' },
      { title: 'Image upload', description: 'A clean upload interface lets clinicians submit skin lesion images for immediate AI analysis.' },
      { title: 'Patient history', description: 'A full history of each patient’s images, predictions and reports is maintained and accessible within the system.' },
      { title: 'Medical reports', description: 'Structured medical reports are generated for each case, combining patient information, image, prediction and Grad-CAM visualization.' },
      { title: 'Analytics dashboard', description: 'An analytics dashboard provides an overview of cases, predictions and trends across the platform.' },
      { title: 'PDF reporting', description: 'Case reports can be exported as PDF documents for sharing, archiving or integration into clinical workflows.' },
      { title: 'Full-stack architecture', description: 'React frontend, FastAPI backend, PostgreSQL database and an AI inference pipeline — designed as one integrated system.' },
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
];
