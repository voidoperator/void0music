import React from 'react';

const HeroBanner = () => {
  return (
    <section className='relative bg-slate-600 border-2 border-white bg-cover bg-center bg-no-repeat h-[100svh]'>
      <div className='bottom-10 lg:bottom-20 absolute left-0 w-full'>
        <div className='container'>
          <h1 className='lg:text-3xl lg:mb-7 mb-4 text-2xl font-bold text-white uppercase whitespace-pre-line'>
            {'herobanner placeholder'}
          </h1>
          <p className='lg:text-xl text-base font-bold text-white uppercase'>{'herobanner placeholder'}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
