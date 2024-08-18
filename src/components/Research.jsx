import React from 'react';

const Research = () => {
  return (
    <div className='lg:pb-20' id='Research'>
      <div className='font-bold text-xl md:text-2xl lg:text-3xl sticky top-0 w-full py-2 text-green-500 bg-white opacity-95'>
        Research
      </div>
      <div className='text-lg md:text-xl xl:text-2xl leading-relaxed space-y-5 mt-5'>
        <h1>
          NIST SHIP: Autonomous Materials Science
        </h1>
        <p className='text-sm'>
          2024: Identifying multi-objective optimization in an active learning loop for automated materials discovery. Using Python with torch, tensorflow, jax, scipy, and scikit, and the dataset from this paper. Research was conducted with a NIST researcher and is expected to be used in a future autonomous lab project collaborating with UMD.
        </p>
        <h1>
          IB EE: Piezoelectric Optimization
        </h1>
        <p className='text-sm'>
          2024: Research on how piezo-generated electricity can be maximized against installation/maintenance costs through homography and computer vision techniques (notably incorporating probabilistic programming), using the Mall Dataset with Pytorch, tensorflow, and OpenCV. 
        </p>
      </div>
    </div>
  );
}

export default Research;