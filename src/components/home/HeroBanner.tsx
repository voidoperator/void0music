import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby'

const heroData = {
  headline: 'none',
  title: 'none',
  heroImage: {
    url: 'none',
  },
};

const HeroBanner = () => {
  return (
    <section
      className='relative bg-cover bg-center bg-no-repeat h-[300px] md:h-[450px] lg:h-[615px]'
      style={{ backgroundImage: `url(${heroData?.heroImage.url})` }}
    >
      <div className='bottom-10 lg:bottom-20 absolute left-0 w-full'>
        <div className='container'>
          <h1 className='lg:text-3xl lg:mb-7 mb-4 text-2xl font-bold text-white uppercase whitespace-pre-line'>
            {heroData?.title}
          </h1>
          <p className='lg:text-xl text-base font-bold text-white uppercase'>{heroData?.headline}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
