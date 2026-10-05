import { cn } from '@/lib/utils';

interface PostImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

// Post images range from landscape photos to portrait posters and square
// illustrations, so the full image is shown over a blurred copy of itself
// instead of being cropped or letterboxed on a flat grey box.
export function PostImage({ src, alt, className, imgClassName, priority }: PostImageProps) {
  const loading = priority ? 'eager' : 'lazy';
  return (
    <div className={cn('relative overflow-hidden bg-neutral-200', className)}>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading={loading}
        className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-70"
      />
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={cn('absolute inset-0 w-full h-full object-contain', imgClassName)}
      />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-neutral-900/5" />
    </div>
  );
}
