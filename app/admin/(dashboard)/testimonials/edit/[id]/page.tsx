import { notFound } from 'next/navigation';
import { getTestimonialById } from '@/lib/testimonials';
import { TestimonialEditor } from '@/components/admin/TestimonialEditor';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditTestimonialPage({ params }: Props) {
  const { id } = await params;
  const testimonial = await getTestimonialById(id);
  if (!testimonial) notFound();

  return <TestimonialEditor testimonial={testimonial} />;
}
