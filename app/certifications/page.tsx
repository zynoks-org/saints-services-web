import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CertificatesCarousel, type CertificateEntry } from '@/components/CertificatesCarousel';
import { BadgeCheck } from 'lucide-react';

export const metadata = {
  title: 'Certifications',
  description: 'View the official accreditations and certifications held by Saints Services Ltd, including Disability Confident and Social Value.',
  keywords: 'Certifications, Disability Confident, Social Value, Saints Services Ltd, Accreditations',
  alternates: {
    canonical: 'https://saintsservices.co.uk/certifications',
  },
  openGraph: {
    title: 'Certifications | Saints Services Ltd',
    description: 'View the official accreditations and certifications held by Saints Services Ltd, including Disability Confident and Social Value.',
    url: 'https://saintsservices.co.uk/certifications',
    siteName: 'Saints Services Ltd',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certifications | Saints Services Ltd',
    description: 'Official accreditations held by Saints Services Ltd, including Disability Confident and Social Value.',
  },
};

const certificates: CertificateEntry[] = [
  {
    id: 'disability-confident',
    title: 'Disability Confident Committed',
    issuer: 'UK Government — gov.uk/disability-confident',
    imageSrc: 'https://snlwjfavn5e79gpo.public.blob.vercel-storage.com/Web/disability-confident-committed-employer-certificate.jpg',
    refLabel: 'Certificate No.',
    refValue: 'DCS049665',
    validity: '01 May 2026 – 27 April 2029',
    description: 'Saints Services Ltd is a Disability Confident Committed employer, reflecting our commitment to inclusive and accessible recruitment, offering interviews to disabled applicants who meet the minimum job criteria, and supporting employees who acquire a disability or long-term health condition.',
  },
  {
    id: 'social-value',
    title: 'Social Value Certified',
    issuer: 'Constructionline & Facilitiesline',
    imageSrc: 'https://snlwjfavn5e79gpo.public.blob.vercel-storage.com/Web/social-value-accreditation-certificate.jpg',
    refLabel: 'Registration No.',
    refValue: '1428268',
    validity: 'Issued 14 July 2026',
    description: 'Saints Services Ltd has met the requirements of the Social Value question set, evidencing our ongoing commitment to delivering measurable social, economic, and environmental benefit alongside our security services.',
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Saints Services Ltd",
  url: "https://saintsservices.co.uk",
  hasCredential: certificates.map((cert) => ({
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Certification",
    name: cert.title,
    identifier: cert.refValue,
    recognizedBy: {
      "@type": "Organization",
      name: cert.issuer,
    },
  })),
};

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070d1e] font-sans text-slate-800 dark:text-slate-300 flex flex-col justify-between transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-white dark:bg-slate-900 text-[#f59e0b] border border-slate-200 dark:border-slate-800 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-xs transition-colors">
            <BadgeCheck className="w-4 h-4 text-[#f59e0b]" />
            <span>Certifications</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4 uppercase transition-colors">
            Our Accreditations
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed transition-colors">
            Saints Services Ltd holds the following official certifications, evidencing our commitment to inclusive employment and measurable social value.
          </p>
        </div>

        <CertificatesCarousel certificates={certificates} />
      </main>
      <Footer />
    </div>
  );
}
