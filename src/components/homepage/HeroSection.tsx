import React from 'react';
import Link from '@docusaurus/Link';
import {
  ChatMultipleRegular,
  LiveRegular,
  MicRegular,
  VideoRegular,
  BoxRegular,
CartRegular,
ClassificationRegular,
ContentViewRegular,
CubeTreeRegular,
} from '@fluentui/react-icons';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

const PRODUCTS = [
  {
    title: 'Classification',
    link: '/guides/classification/intro-classification',
    icon: CubeTreeRegular,
    lightImage: '/static/landing-page/hero/video-graphic.png',
    darkImage: '/static/landing-page/hero/video-graphic-dark.png',
    text: 'Retrieve product classification models directly through the API. Access standardized categories, attributes, and hierarchies to ensure consistent product structuring and interoperability.',
  },
  {
    title: 'Product Information',
    link: '/guides/classification/intro-classification',
    icon: BoxRegular,
    lightImage: '/static/landing-page/hero/video-graphic.png',
    darkImage: '/static/landing-page/hero/video-graphic-dark.png',
    text: 'Access detailed product information through the API. Retrieve descriptions, specifications, media, and documents to power rich and reliable product experiences.',
  },
  {
    title: 'Commerce',
    link: '/guides/commerce/intro-commerce',
    icon: CartRegular,
    lightImage: '/static/landing-page/hero/voice-graphic.png',
    darkImage: '/static/landing-page/hero/voice-graphic-dark.png',
    text: 'Connect systems through the OSPI API to enable commerce. Place product orders directly with the appropriate supplier and streamline procurement workflows.',
  },
  {
    title: 'Content',
    link: '/guides/content/intro-content',
    icon: ContentViewRegular,
    lightImage: '/static/landing-page/hero/livestream-graphic.png',
    darkImage: '/static/landing-page/hero/livestream-graphic-dark.png',
    text: 'Distribute product content via the OSPI API. Share launches, promotions, and campaigns directly with retailers to boost visibility and engagement.',
  },
  {
    title: 'Communication',
    beta: true,
    link: '/guides/communication/intro-communication',
    icon: ChatMultipleRegular,
    lightImage: '/static/landing-page/hero/chat-graphic.png',
    darkImage: '/static/landing-page/hero/chat-graphic-dark.png',
    text: 'acilitate direct communication through the OSPI API. Connect suppliers, retailers, and partners seamlessly to simplify collaboration and support.',
  },
];

function HeroProduct({
  link,
  title,
  icon: Icon,
  text,
  lightImage,
  darkImage,
  beta,
}: (typeof PRODUCTS)[0]) {
  return (
    <Link
      to={link}
      style={{
        borderWidth: '1px',
      }}
      className={clsx(
        'group relative cursor-pointer overflow-clip rounded-3xl from-primary/30 via-transparent to-transparent text-black transition-all hover:bg-gradient-to-tr hover:text-primary hover:no-underline dark:text-white',
        'border-secondary-700 bg-secondary-900 hover:!border-primary dark:border-secondary-800'
      )}
    >
      <div className="p-6 !pb-0">
        <h3 className="mb-1.5 flex items-center gap-3 font-jakarta group-hover:text-primary">
          <Icon className="h-7 w-7" />
          <div>
            {title}
            {beta && <span className="font-normal text-text-400"> (Beta)</span>}
          </div>
        </h3>
        <p className="mb-0 text-sm text-zinc-400">{text}</p>
      </div>
      <ThemedImage
        sources={{
          light: lightImage,
          dark: darkImage,
        }}
        alt={title}
        className="mt-1 w-full transition-transform group-hover:scale-110"
      />
    </Link>
  );
}

export default function HeroSection() {
  return (
    <>
      <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
        <div className="flex flex-col items-center justify-between py-14">
          <h2 className="mb-4 font-jakarta text-5xl font-bold">
            Build with Ospi
          </h2>
          <p className="max-w-xl text-center text-text-400">
            At Ospi, we're building the future of real-time stock communication.
            Integrate programmable, and easily customizable product information
            into your web, mobile, and desktop applications with just a few
            lines of code.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-5xl grid-cols-1 grid-rows-2 gap-6 px-4 md:grid-cols-2">
        {PRODUCTS.map((product) => (
          <HeroProduct {...product} key={product.title} />
        ))}
      </section>
    </>
  );
}
