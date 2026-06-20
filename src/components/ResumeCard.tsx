import type { ReactNode } from 'react';

interface ResumeCardProps {
  title: string;
  subtitle: string;
  period: string;
  children?: ReactNode;
}

function ResumeCard({ title, subtitle, period, children }: ResumeCardProps) {
  return (
    <article className="resume-card">
      <header className="resume-card__header">
        <div>
          <h2 className="resume-card__title">{title}</h2>
          <p className="resume-card__subtitle">{subtitle}</p>
        </div>
        <p className="resume-card__period">{period}</p>
      </header>
      {children}
    </article>
  );
}

export default ResumeCard;
