'use client';

import { useState, useSyncExternalStore } from 'react';
import { Share2, Check, MessageCircle } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  slug: string;
}

const subscribe = (callback: () => void) => {
  window.addEventListener('popstate', callback);
  return () => window.removeEventListener('popstate', callback);
};

const getSnapshot = () => window.location.href;
const getServerSnapshot = () => '';

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const liveUrl = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const fallbackUrl = `https://www.saintsservices.co.uk/blog/${slug}`;
  const shareUrl = liveUrl || fallbackUrl;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(shareUrl);

  return (
    <div className="my-10 p-6 rounded-sm bg-white dark:bg-[#0b1329] border border-slate-200 dark:border-slate-800 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 transition-colors">
      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-wider">
        <Share2 className="w-4 h-4" />
        <span>Distribute Intelligence // Share Brief</span>
      </div>

      <div className="flex items-center gap-2 flex-wrap justify-center">
        {/* X / Twitter */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#f59e0b] hover:border-[#f59e0b] transition-all text-xs font-mono flex items-center gap-1.5"
          title="Share on X"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span className="hidden sm:inline">X</span>
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#f59e0b] hover:border-[#f59e0b] transition-all text-xs font-mono flex items-center gap-1.5"
          title="Share on LinkedIn"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
          </svg>
          <span className="hidden sm:inline">LinkedIn</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://api.whatsapp.com/send?text=${encodedTitle}%20-%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#f59e0b] hover:border-[#f59e0b] transition-all text-xs font-mono flex items-center gap-1.5"
          title="Share on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* Copy Link Button */}
        <button
          onClick={handleCopy}
          className="px-4 py-2.5 rounded-sm bg-slate-900 dark:bg-[#f59e0b] text-white dark:text-slate-950 font-bold font-mono text-xs uppercase tracking-wider transition-all hover:opacity-90 flex items-center gap-1.5 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-950" />
              <span>Link Copied</span>
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4 text-[#f59e0b] dark:text-slate-950" />
              <span>Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}