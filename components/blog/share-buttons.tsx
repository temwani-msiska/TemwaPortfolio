'use client';

import { useState } from 'react';
import { Check, Link2, Linkedin, Twitter } from 'lucide-react';

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copy this link', url);
    }
  };

  const encodedUrl = encodeURIComponent(url);
  const networks = [
    {
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
    },
    {
      label: 'X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(title)}`,
      icon: Twitter,
    },
  ];

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex items-center gap-2 h-9 px-3.5 rounded-full border border-neutral-200 text-sm text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
      >
        {copied ? <Check className="w-4 h-4 text-accent" /> : <Link2 className="w-4 h-4" />}
        {copied ? 'Copied' : 'Copy link'}
      </button>
      {networks.map((network) => (
        <a
          key={network.label}
          href={network.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${network.label}`}
          className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
        >
          <network.icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}
