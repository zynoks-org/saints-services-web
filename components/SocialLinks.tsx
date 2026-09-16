import { Mail } from 'lucide-react';

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-4 3.87-4 1.12 0 2.3.2 2.3.2v2.5h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.86l-.46 2.91h-2.4v7.04A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.07.05-1.79.22-2.43.47a4.9 4.9 0 0 0-1.77 1.15 4.9 4.9 0 0 0-1.15 1.77c-.25.64-.42 1.36-.47 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.07.22 1.79.47 2.43a4.9 4.9 0 0 0 1.15 1.77 4.9 4.9 0 0 0 1.77 1.15c.64.25 1.36.42 2.43.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.07-.05 1.79-.22 2.43-.47a4.9 4.9 0 0 0 1.77-1.15 4.9 4.9 0 0 0 1.15-1.77c.25-.64.42-1.36.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.07-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.15-1.77 4.9 4.9 0 0 0-1.77-1.15c-.64-.25-1.36-.42-2.43-.47C15.06 2.01 14.72 2 12 2zm0 1.8c2.67 0 2.99.01 4.04.06.97.04 1.5.2 1.85.34.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.35.3.88.34 1.85.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.97-.2 1.5-.34 1.85-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.35.14-.88.3-1.85.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.97-.04-1.5-.2-1.85-.34a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.14-.35-.3-.88-.34-1.85C3.81 14.99 3.8 14.67 3.8 12s.01-2.99.06-4.04c.04-.97.2-1.5.34-1.85.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.35-.14.88-.3 1.85-.34C9.01 3.81 9.33 3.8 12 3.8zm0 3.05a5.15 5.15 0 1 0 0 10.3 5.15 5.15 0 0 0 0-10.3zm0 8.5a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7zm5.35-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://www.facebook.com/saintsservicesuk', Icon: FacebookIcon },
  { name: 'Instagram', href: 'https://www.instagram.com/saintsservicesuk/', Icon: InstagramIcon },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/saintsservicesuk', Icon: LinkedinIcon },
  { name: 'Email', href: 'mailto:info@saintsservices.co.uk', Icon: Mail },
];

interface SocialLinksProps {
  variant?: 'bar' | 'buttons';
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ variant = 'buttons', className = '', iconClassName }: SocialLinksProps) {
  if (variant === 'bar') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        {SOCIAL_LINKS.map(({ name, href, Icon }) => (
          <a
            key={name}
            href={href}
            target={name === 'Email' ? undefined : '_blank'}
            rel={name === 'Email' ? undefined : 'noopener noreferrer'}
            aria-label={name === 'Email' ? 'Email Saints Services' : `Saints Services on ${name}`}
            className="text-slate-500 dark:text-slate-400 hover:text-[#f59e0b] transition-colors"
          >
            <Icon className={iconClassName ?? 'w-3.5 h-3.5'} />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target={name === 'Email' ? undefined : '_blank'}
          rel={name === 'Email' ? undefined : 'noopener noreferrer'}
          aria-label={name === 'Email' ? 'Email Saints Services' : `Saints Services on ${name}`}
          className="p-3.5 rounded-sm bg-white/5 border border-white/10 text-slate-200 hover:text-[#f59e0b] hover:border-[#f59e0b] hover:bg-white/10 transition-all"
        >
          <Icon className={iconClassName ?? 'w-6 h-6'} />
        </a>
      ))}
    </div>
  );
}
