interface EyebrowProps {
  children: React.ReactNode;
}

export function Eyebrow({ children }: EyebrowProps) {
  return <div className="eyebrow"><span />{children}</div>;
}

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, text, light = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${light ? 'light' : ''}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
