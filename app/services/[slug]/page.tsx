import { notFound } from 'next/navigation';
import ServiceDetailClient from '@/components/ServiceDetailClient';

const validSlugs = ['security-guards', 'keyholding', 'door-supervision', 'event-security'];

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  return <ServiceDetailClient slug={slug} />;
}