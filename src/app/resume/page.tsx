'use client';

import Link from 'next/link';

export default function ResumePage() {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          @page { margin: 0.5in; size: letter; }
          ul { list-style-type: disc !important; padding-left: 16px !important; }
          li { list-style-type: disc !important; display: list-item !important; }
        }
      `}</style>

      {/* Print button */}
      <div className="no-print flex justify-center gap-4 py-4 bg-gray-100 border-b border-gray-300">
        <button
          onClick={() => window.print()}
          className="px-6 py-2 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition font-medium text-sm"
        >
          Print / Save as PDF
        </button>
        <Link
          href="/"
          className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-200 transition font-medium text-sm text-gray-700"
        >
          ← Back to Site
        </Link>
      </div>

      {/* Resume */}
      <div
        style={{
          maxWidth: '780px',
          margin: '24px auto',
          padding: '12px 48px 40px',
          fontFamily: 'Georgia, "Times New Roman", serif',
          color: '#111',
          background: '#fff',
          lineHeight: 1.4,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '18px', borderBottom: '2px solid #047857', paddingBottom: '14px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0, letterSpacing: '0.5px' }}>
            EMILY HOMMERDING
          </h1>
          <p style={{ margin: '6px 0 0', fontSize: '13px', color: '#374151' }}>
            Senior Data Scientist &nbsp;|&nbsp; Greater Seattle Area &nbsp;|&nbsp;
            <a href="mailto:emhomm4@gmail.com" style={{ color: '#047857', textDecoration: 'none' }}>emhomm4@gmail.com</a>
            &nbsp;|&nbsp;
            <a href="https://www.linkedin.com/in/emily-hommerding" style={{ color: '#047857', textDecoration: 'none' }}>linkedin.com/in/emily-hommerding</a>
            &nbsp;|&nbsp;
            <a href="https://emilyh.me" style={{ color: '#047857', textDecoration: 'none' }}>emilyh.me</a>
          </p>
        </div>

        {/* Summary */}
        <Section title="SUMMARY">
          <p style={{ margin: 0, fontSize: '13px' }}>
            Accomplished data scientist specializing in analytics and business intelligence, with a background spanning physics research, software engineering, and AI-assisted development. Proven track record driving measurable product growth through advanced analytics, scalable data pipelines, and cross-functional collaboration.
          </p>
        </Section>

        {/* Experience */}
        <Section title="EXPERIENCE">
          <Job
            title="Senior Data Scientist"
            subtitle="Senior Software Engineer (Dec 2023 – Dec 2025)"
            company="Microsoft"
            location="Redmond, WA"
            period="Dec 2023 – Present"
            bullets={[
              <span key={0}>Delivered product insights using time series forecasting, cohort/retention &amp; funnel analysis, k-means clustering, and churn modeling — driving <strong>+4M monthly active users</strong> and <strong>+15pp growth in paid conversion</strong>.</span>,
              <span key={1}>Partnered with customer advisory teams to identify growth opportunities, resulting in <strong>100K new paid license activations</strong>.</span>,
              <span key={2}>Applied AI-assisted development tools (<strong>Claude Code</strong>, <strong>Power BI MCP Server</strong>) to streamline analytics workflows and reduce time-to-insight.</span>,
              <span key={3}>Led AI-first analytics solutions: internal data assistant (Power Apps, Microsoft Copilot Studio), AI-driven dashboarding, and automated planning workflows to scale self-service insights.</span>,
              <span key={4}>Designed, built, and maintained <strong>20+ production data pipelines</strong> (Scope, Azure Synapse, PySpark, ADF); eliminated <strong>4B+ unnecessary telemetry records/day</strong>, reducing COGS.</span>,
              <span key={5}>Served as <strong>Data Champion</strong> for an 800+ person org — defined analytics strategy, hosted office hours, promoted data governance.</span>,
              <span key={6}>Launched 35-person allyship program (<strong>60%+ knowledge gains</strong>), led 200+ member women&apos;s professional group, mentored <strong>6 first-gen college interns</strong> over 4 years.</span>,
            ]}
          />
          <Job
            title="Software Engineer II / Software Engineer I"
            company="Microsoft"
            location="Redmond, WA"
            period="Jul 2017 – Dec 2023"
            bullets={[
              <span key={0}>Contributed to large-scale data pipeline infrastructure; implemented <strong>GDPR-compliant</strong> data handling and privacy safeguards for <strong>100+ pipelines</strong>.</span>,
              <span key={1}>Developed new functions in the Power Apps formula language (C#, TypeScript) and enhanced web services; served on <strong>24/7 on-call rotation</strong>.</span>,
              <span key={2}>Partnered with <strong>Red Cross</strong> developers to rapidly build Power Apps solutions during the COVID-19 pandemic.</span>,
              <span key={3}>Built a visual, interactive server health monitoring tool for Dynamics 365 telemetry using Unity; improved Azure services and CI/CD pipeline efficiency.</span>,
            ]}
          />
          <Job
            title="Laboratory Physicist"
            company="Research International"
            location="Monroe, WA"
            period="Jul 2016 – Jul 2017"
            bullets={[
              <span key={0}>Sole developer of a <strong>patented</strong> Android application (Java, Android Studio) for a chemical/biological detection device; shipped to <strong>international production in 2017</strong>.</span>,
              <span key={1}>Applied computer vision (OpenCV) to automate image analysis of chemical test strips; designed firmware for a custom CPU microcontroller with USB/RS-232 communication.</span>,
            ]}
          />
        </Section>

        {/* Education */}
        <Section title="EDUCATION">
          <EduItem
            degree="Master of Science, Physics"
            school="University of Oregon, Eugene, OR"
            period="June 2016"
            detail="NSF Graduate Research Fellow. Research in quantum properties of nitrogen vacancy centers in diamond."
          />
          <EduItem
            degree="Bachelor of Science, Physics — Magna Cum Laude"
            school="Illinois Institute of Technology, Chicago, IL"
            period="May 2013"
            detail="Research in Raman spectroscopy for superconducting RF cavities. Published in Physical Review Special Topics - Accelerators and Beams."
          />
        </Section>

        {/* Skills */}
        <Section title="SKILLS">
          <SkillRow label="Analytics & BI" skills="Power BI, DAX, PowerQuery, Kusto (KQL), SQL, Analytics, Azure Data Factory, Azure Synapse, PySpark, Scope" />
          <SkillRow label="Engineering" skills="C#, TypeScript, Python, Java, Android (Java), Unity, C/C++, OpenCV, Azure, CI/CD" />
          <SkillRow label="AI & Tools" skills="Claude Code, Power BI MCP Server, Microsoft Copilot Studio, Power Apps" />
        </Section>

        {/* Certifications & Patents */}
        <Section title="CERTIFICATIONS, PATENTS &amp; PUBLICATIONS">
          <p style={{ margin: '0 0 4px', fontSize: '12.5px' }}>
            <strong>Certification:</strong> Claude Code in Action
          </p>
          <p style={{ margin: '0 0 4px', fontSize: '12.5px' }}>
            <strong>Patent:</strong>{' '}
            <a href="https://ppubs.uspto.gov/api/patents/html/20170300779?source=US-PGPUB" style={{ color: '#047857', textDecoration: 'none' }}>
              US20170300779A1
            </a>
            {' '}— Android application for chemical/biological detection
          </p>
          <p style={{ margin: 0, fontSize: '12.5px' }}>
            <strong>Publication:</strong> Cao, C., Ford, D., Bishnoi, S., Proslier, T., Albee, B., <strong>Hommerding, E.</strong>, Zasadzinski, J.F. (2013). Detection of surface carbon and hydrocarbons in hot spot regions of niobium superconducting RF cavities by Raman spectroscopy. <em>Physical Review Special Topics - Accelerators and Beams, 16</em>(6).
          </p>
        </Section>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '14px' }}>
      <h2 style={{
        fontSize: '12px',
        fontWeight: 'bold',
        letterSpacing: '1.2px',
        color: '#047857',
        borderBottom: '1px solid #d1fae5',
        paddingBottom: '3px',
        marginBottom: '8px',
        fontFamily: 'Arial, sans-serif',
        textTransform: 'uppercase',
      }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function Job({
  title,
  subtitle,
  company,
  location,
  period,
  bullets,
}: {
  title: string;
  subtitle?: string;
  company: string;
  location: string;
  period: string;
  bullets: React.ReactNode[];
}) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <span style={{ fontWeight: 'bold', fontSize: '13.5px' }} dangerouslySetInnerHTML={{ __html: title }} />
          {subtitle && (
            <span style={{ fontSize: '12px', color: '#6b7280', marginLeft: '8px' }}>{subtitle}</span>
          )}
        </div>
        <span style={{ fontSize: '12px', color: '#6b7280', whiteSpace: 'nowrap', marginLeft: '12px' }}>{period}</span>
      </div>
      <div style={{ fontSize: '12.5px', color: '#047857', marginBottom: '4px' }} dangerouslySetInnerHTML={{ __html: `${company} &mdash; ${location}` }} />
      <ul style={{ margin: '0', paddingLeft: '16px', listStyleType: 'disc' }}
      >
        {bullets.map((b, i) => (
          <li key={i} style={{ fontSize: '12.5px', marginBottom: '2px', display: 'list-item' }}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function EduItem({ degree, school, period, detail }: { degree: string; school: string; period: string; detail: string }) {
  return (
    <div style={{ marginBottom: '6px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <strong style={{ fontSize: '13px' }}>{degree}</strong>
        <span style={{ fontSize: '12px', color: '#6b7280' }}>{period}</span>
      </div>
      <div style={{ fontSize: '12.5px', color: '#047857' }}>{school}</div>
      <div style={{ fontSize: '12px', color: '#374151' }}>{detail}</div>
    </div>
  );
}

function SkillRow({ label, skills }: { label: string; skills: string }) {
  return (
    <p style={{ margin: '0 0 3px', fontSize: '12.5px' }}>
      <strong>{label}:</strong> {skills}
    </p>
  );
}
