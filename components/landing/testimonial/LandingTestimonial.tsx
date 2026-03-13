import clsx from 'clsx';
import Image from 'components/shared/Image';

export interface TestimonialItem {
  className?: string;
  url?: string;
  text?: string;
  imageSrc: string;
  name?: string;
  handle?: string;
  featured?: boolean;
  verified?: boolean;
  size?: 'full' | 'half' | 'third'; // NB: Only applies to testimonials in a list, not grid.
}

/**
 * Shows a testimonial with an image, name, and handle.
 *
 * Meant to be used with a `LandingTestimonialList` or `LandingTestimonialGrid`.
 */
export const LandingTestimonial = ({
  className,
  url,
  imageSrc,
  featured,
}: TestimonialItem) => {
  const missingUrl = !url || url === '#';

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'w-full inline-block bg-black/10 border-2 border-white/20 dark:bg-neutral-900/10 dark:border-neutral-700 rounded-2xl shadow-md ring-1 ring-gray-900/5',
        featured ? 'shadow-xl' : 'p-6',
        missingUrl
          ? 'cursor-default pointer-events-none'
          : 'cursor-pointer hover:bg-black/35 hover:border-[#7fe655b3] dark:hover:bg-neutral-800/60 transition-colors',
        className,
      )}
    >
      <figure className="flex justify-center">
        <Image
          width={120}
          height={120}
          className="h-[48px] w-auto object-contain"
          src={imageSrc}
          alt=""
        />
      </figure>
    </a>
  );
};
