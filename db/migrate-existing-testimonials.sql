-- One-time migration: moves the testimonials that used to be hardcoded in
-- components/Testimonials.tsx into the testimonials table, so they're
-- editable from /admin/testimonials like blog posts are from /admin/blog.
-- Run once against DATABASE_URL (or DATABASE_URL_ADMIN), after schema.sql
-- and roles-and-rls.sql have been applied. Safe to re-run: guarded by
-- "where not exists" on the exact quote text.

insert into testimonials (quote, author_name, organization, rating, published)
select v.quote, v.author_name, v.organization, v.rating, true
from (
  values
    ('Saints Services provided exceptional door supervision for our corporate venue. The security officers arrived punctually, maintained high professional standards, and managed entrance screening flawlessly.',
     'Operations Manager', 'Event & Venue Group', 5),
    ('Saints Services has been an outstanding security partner across our hospitality locations over the past two years. Reliable, proactive, and instrumental in ensuring our weekend operations run safely.',
     'General Manager', 'Hospitality & Leisure Operations', 5),
    ('I would like to extend our appreciation to Saints Services for delivering top-tier site protection across our multi-city locations. The assigned SIA guards react rapidly to alerts and remain exceptionally vigilant.',
     'Group Security Director', 'Enterprise Commercial Properties', 5),
    ('Saints Services is by far the most dependable security provider we have contracted. Zero hassle, flawless shift attendance records, and highly trained personnel who take real pride in site protection.',
     'Security Coordinator', 'Commercial Distribution Network', 5),
    ('The guard management tech Saints Services utilizes gives us total operational visibility. Real-time GPS patrol tracking of door supervisors and immediate incident logs give our management complete peace of mind.',
     'Head of Security', 'Entertainment & Gaming Group', 5),
    ('Saints Services consistently delivers a first-class security service. From initial risk planning to on-site execution, their team is disciplined, presentable, and extremely proactive.',
     'Operations Director', 'Regional Property Management', 5)
) as v(quote, author_name, organization, rating)
where not exists (
  select 1 from testimonials t where t.quote = v.quote
);
