import { Eyebrow } from './SectionHeading';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
}

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className="page-hero-mark">GNS</div>
    </section>
  );
}
