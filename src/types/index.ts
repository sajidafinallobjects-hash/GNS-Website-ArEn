import type { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  technologies: string[];
  features: { title: string; description: string }[];
  results: { label: string; value: string }[];
  featured: boolean;
  icon: LucideIcon;
}

export interface NavLink {
  to: string;
  label: string;
}
