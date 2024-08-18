import React from 'react';
import { ReactTyped } from 'react-typed';

function Lander() {
  return (
    <div className='flex flex-col min-h-screen leading-relaxed md:box-border md:w-1/2 items-start md:pl-30 pl-24 md:mt-5 md:fixed justify-center'>
      <img className='object-scale-down shadow-lg rounded-lg justify-center size-40 mb-10' src='./IMG_7282.jpg' />
      <h1 className='text-4xl md:text-5xl'>Daniel Yi</h1>
      <div className='flex flex-col flex-wrap justify-center pt-3 md:flex-row md:px-0 md:justify-start mt-5'>
        <ReactTyped
          strings={[
            'Web Developer',
            'Game Developer',
            '3D artist',
            'Physics nerd',
            'Machine Learning enthusiast',
            'Initiator',
            'Researcher',
            'IB Student'
          ]}
          typeSpeed={70}
          backSpeed={50}
          loop
          className='pl-1 font-semibold text-lg text-balance'
        />
      </div>
      <p className='mt-10 text-md text-balance'>
        Hi! I'm a high school student at Richard Montgomery High School who is interested in (almost) everything. Here's a glimpse into some of what I've done.
      </p>
      <div className='mt-5 items-center md:block'>
        <a href='#Research'>
            <div className='transition-all hover:translate-x-5 flex items-center'>
                <span>Research</span>
            </div>
        </a>
        <a href='#Artwork'>
            <div className='transition-all hover:translate-x-5 flex items-center'>
                <span>Artwork</span>
            </div>
        </a>
        <a href='#MockBusiness'>
            <div className='transition-all hover:translate-x-5 flex items-center'>
                <span>Mock Business</span>
            </div>
        </a>
      </div>
    </div>
  );
}

export default Lander;