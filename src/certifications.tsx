import ResumeCard from './components/ResumeCard';
import vectorCertificate from './assets/iso_26262_Certificate.pdf';
import safertosCertificate from './assets/safertos_certificate.pdf';

interface Credential {
  organization: string;
  degree: string;
  period: string;
  pdf: string | null;
}

const credentials: Credential[] = [
  {
    organization: 'VECTOR Consulting Services',
    degree: 'Functional Safety with ISO 26262',
    period: 'Feb 2026',
    pdf: vectorCertificate,
  },
  {
    organization: 'SafeRTOS',
    degree: 'SafeRTOS Training Certificate',
    period: 'Oct 2024',
    pdf: safertosCertificate,
  },
  {
    organization: 'Blekinge Institute of Technology',
    degree: 'Bachelor of Science in Software Engineering',
    period: '2019 - 2022',
    pdf: null,
  },
];

function Certifications() {
  return (
    <section className="resume-section" aria-labelledby="certifications-heading">
      <h1 id="certifications-heading" className="resume-section__heading">
        Certifications and Degrees
      </h1>

      <div className="resume-list">
        {credentials.map((credential) => (
          <ResumeCard
            key={`${credential.organization}-${credential.degree}`}
            title={credential.degree}
            subtitle={credential.organization}
            period={credential.period}
          >
            {credential.pdf && (
              <a
                className="resume-card__link"
                href={credential.pdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            )}
          </ResumeCard>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
