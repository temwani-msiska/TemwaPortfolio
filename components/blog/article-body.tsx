import { Fragment, type ReactNode } from 'react';

export interface ArticleHeading {
  id: string;
  text: string;
}

const LINK_PATTERN = /(https?:\/\/[^\s]+|(?:www\.)?(?:codesheros|codebloom)\.co\.zm(?:\/[^\s]*)?)/;

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export function extractHeadings(content: string): ArticleHeading[] {
  return content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('## '))
    .map((line) => {
      const text = line.slice(3).trim();
      return { id: slugifyHeading(text), text };
    });
}

function renderInline(text: string): ReactNode[] {
  return text.split(LINK_PATTERN).map((part, index) => {
    if (index % 2 === 0) return part;
    const trailing = /[.,;:!?)]+$/.exec(part)?.[0] ?? '';
    const label = trailing ? part.slice(0, -trailing.length) : part;
    const href = /^https?:\/\//.test(label)
      ? label
      : `https://${label.startsWith('www.') ? label : `www.${label}`}`;
    return (
      <Fragment key={index}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-medium underline decoration-primary/30 underline-offset-4 hover:decoration-primary transition-colors break-words"
        >
          {label}
        </a>
        {trailing}
      </Fragment>
    );
  });
}

export function ArticleBody({ content }: { content: string }) {
  const blocks = content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  let paragraphCount = 0;

  return (
    <div>
      {blocks.map((block, index) => {
        if (block.startsWith('## ')) {
          const text = block.slice(3).trim();
          return (
            <h2
              key={index}
              id={slugifyHeading(text)}
              className="scroll-mt-32 mt-14 mb-5 text-2xl md:text-3xl font-heading font-bold tracking-tight text-neutral-900"
            >
              <span className="block w-10 h-1 rounded-full bg-gradient-to-r from-primary to-accent mb-5" />
              {text}
            </h2>
          );
        }
        if (block.startsWith('### ')) {
          return (
            <h3
              key={index}
              className="scroll-mt-32 mt-10 mb-3 text-xl md:text-2xl font-heading font-semibold tracking-tight text-neutral-900"
            >
              {block.slice(4).trim()}
            </h3>
          );
        }
        const isLead = paragraphCount === 0;
        paragraphCount += 1;
        return (
          <p
            key={index}
            className={
              isLead
                ? 'mb-10 text-xl md:text-2xl leading-[1.6] text-neutral-800'
                : 'mb-7 text-[1.0625rem] md:text-lg leading-[1.85] text-neutral-700'
            }
          >
            {renderInline(block)}
          </p>
        );
      })}
    </div>
  );
}
