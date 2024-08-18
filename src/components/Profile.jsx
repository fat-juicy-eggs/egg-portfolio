import React from 'react';
import { ReactTyped } from 'react-typed';
import { FaDiscord, FaInstagramSquare, FaGithub, FaArrowRight } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'

function Lander() {
  return (
    <div className='flex flex-col min-h-screen leading-relaxed md:box-border md:w-1/2 items-start md:pl-30 pl-24 md:-mt-5 md:fixed justify-center'>
      <div className='absolute top-[120px] left-[300px]'><a target='_blank' href='https://discordapp.com/users/theoneandonlyeggoil'><FaDiscord className='size-7 hover:size-8' /></a></div>
      <div className='absolute top-[160px] left-[300px]'><a target='_blank' href='https://www.instagram.com/eggoil166'><FaInstagramSquare className='size-7 hover:size-8' /></a></div>
      <div className='absolute top-[200px] left-[300px]'><a target='_blank' href='https://github.com/fat-juicy-eggs'><FaGithub className='size-7 hover:size-8' /></a></div>
      <div className='absolute top-[240px] left-[300px]'><a target='_blank' href='mailto:e.g.g.wp16@gmail.com'><MdEmail className='size-7 hover:size-8' /></a></div>
      <img className='object-scale-down shadow-lg rounded-xl justify-center size-40 mb-10 ml-3' src='./IMG_7282.jpg' />
      <div className='bg-white'><h1 className='text-4xl md:text-5xl'>Daniel Yi</h1></div>
      <h3 className='absolute z-0 mb-12 ml-[250px] text-2xl md:text-3xl text-gray-900'>aka eggoil</h3>
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
            <div className='transition-all hover:translate-x-5 flex items-center text-green-500'>
                <FaArrowRight className='mr-1' />
                <span>Research</span>
            </div>
        </a>
        <a href='#Business'>
            <div className='transition-all hover:translate-x-5 flex items-center text-green-500'>
                <FaArrowRight className='mr-1' />
                <span>Mock Business</span>
            </div>
        </a>
        <a href='#Art'>
            <div className='transition-all hover:translate-x-5 flex items-center text-green-500'>
                <FaArrowRight className='mr-1' />
                <span>Artwork</span>
            </div>
        </a>
      </div>
    </div>
  );
}

export default Lander;