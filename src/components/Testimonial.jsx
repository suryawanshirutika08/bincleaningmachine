import Image from 'next/image';

import { Container } from '@/components/Container';
import { GridPattern } from '@/components/GridPattern';
import { StarRating } from '@/components/StarRating';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export function Testimonial({ id, author, children }) {
  return (
    <aside
      id={id}
      aria-label={`Testimonial from ${author.name}`}
      className="relative bg-slate-100 py-16 sm:py-32"
    >
      <div className="text-slate-900/10">
        <GridPattern x="50%" patternTransform="translate(0 80)" />
      </div>
      <Container size="xs" className="relative">
        <figure>
          <div className="flex text-slate-900 sm:justify-center">
            <StarRating />
          </div>
          <blockquote className="mt-10 font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-center">
            {children}
          </blockquote>
          <figcaption className="mt-10 flex flex-col items-center sm:justify-center">
            <div className="overflow-hidden bg-slate-200 w-26 h-14">
              <Image
                className="h-full w-full"
                src={author.image}
                alt=""
                width={100}
                height={100} 
              />
            </div>
            <div className="mt-4 text-center">
              <div className="text-base font-medium leading-6 tracking-tight text-slate-900">
                {author.name}
              </div>
              <div className="mt-1 text-sm text-slate-600">{author.role}</div>
            </div>
            <div className="mt-3 flex flex-col items-center text-center">
              <a href="https://www.instagram.com/shreepad_automachine_pvt_ltd" className="flex items-center gap-2 text-slate">
                <FaInstagram className="text-2xl text-slate-900" />
                <span className="text-sm">shreepad_automachine_pvt_ltd</span>
              </a>
              <a href="mailto:shreepadautomachine11@gmail.com" className="flex items-center gap-2 text-slate mt-2">
                <MdEmail className="text-2xl text-slate-900" />
                <span className="text-sm">shreepadautomachine11@gmail.com</span>
              </a>
            </div>
          </figcaption>
        </figure>
      </Container>
    </aside>
  );
}
