import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '@/types';
import { Reveal } from './Reveal';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;
  return (
    <Reveal delay={index * 80}>
      <Link to="/services" className="service-card">
        <span className="service-index">0{index + 1}</span>
        <Icon size={25} strokeWidth={1.5} />
        <h3>{service.title}</h3>
        <p>{service.shortDescription}</p>
        <span className="card-arrow"><ArrowRight size={16} /></span>
      </Link>
    </Reveal>
  );
}
