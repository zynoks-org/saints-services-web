import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import { listTestimonials } from '@/lib/testimonials';
import { TestimonialsTable } from '@/components/admin/TestimonialsTable';

export default async function AdminTestimonialsListPage() {
  const testimonials = await listTestimonials();

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white uppercase tracking-tight">Testimonials</h1>
          <p className="text-slate-500 text-sm mt-1">
            {testimonials.length} testimonial{testimonials.length === 1 ? '' : 's'}
          </p>
        </div>
        <Link
          href="/admin/testimonials/new"
          className="flex items-center gap-2 bg-[#f59e0b] text-slate-950 font-bold px-4 py-2.5 rounded-sm text-sm uppercase tracking-wide hover:brightness-110 transition-all active:scale-95"
        >
          <PlusCircle className="w-4 h-4" /> New Testimonial
        </Link>
      </div>

      <TestimonialsTable testimonials={testimonials} />
    </div>
  );
}
