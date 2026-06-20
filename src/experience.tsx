import ResumeCard from './components/ResumeCard';

interface Job {
  company: string;
  title: string;
  period: string;
  description: string[];
}

const jobs: Job[] = [
  {
    company: 'HaleyTek AB',
    title: 'Software Developer',
    period: 'Sep 2022 - Present',
    description: [
      'Designed and developed safety-critical infotainment software for ISO 26262 ASIL-B Volvo Cars SPA2 and SPA3 platforms using C/C++, Python, QNX, and SafeRTOS.',
      'Integrated and validated ARM Cortex-R RTOS components, troubleshooting real-time interactions between safety-critical and application domains.',
      'Diagnosed and resolved defects across owned and external software components, preventing undefined behavior and reducing risk of unintended safe-state activation.',
      'Designed and implemented CI/CD automation pipelines with Python and Apache Airflow, enabling automated validation workflows and SafeRTOS integration across development environments.',
      'Built Proxmox-based infrastructure for repeatable deployment, validation environment provisioning, and embedded safety verification workflows.',
      'Improved software quality and compliance readiness by refining Polyspace static analysis workflows and defect detection processes for assigned software components.',
      'Debugged hardware/software integration issues involving UART communication with logic analyzers, as well as I2C, GPIO, MCU interfaces, JTAG, and Lauterbach TRACE32 in bench testing environments.',
      'Executed safety-critical verification and validation activities through unit testing, integration testing, software verification, defect analysis, and requirements traceability.',
      'Contributed to functional safety compliance across Volvo Cars SPA2 and SPA3 platforms through HARA, TARA, FMEA, SWAD, and SWRS work products.',
    ],
  },
];

function Experience() {
  return (
    <section className="resume-section" aria-labelledby="experience-heading">
      <h1 id="experience-heading" className="resume-section__heading">
        Professional Experience
      </h1>

      <div className="resume-list">
        {jobs.map((job) => (
          <ResumeCard
            key={`${job.company}-${job.period}`}
            title={job.title}
            subtitle={job.company}
            period={job.period}
          >
            <ul className="resume-card__list">
              {job.description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </ResumeCard>
        ))}
      </div>
    </section>
  );
}

export default Experience;
