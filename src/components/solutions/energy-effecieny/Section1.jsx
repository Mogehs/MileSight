import React from 'react';

const Section1 = () => {
  return (
    <div>
      <div className='flex flex-col sm:flex-row left-4 sm:pl-10 py-4 text-white text-md bg-blue-950 gap-4 sm:gap-2'>
        <div className=' sm:border-r-1 cursor-pointer'>
          <h1 className='font-semibold hover:text-blue-700 px-3'>Challenges</h1>
        </div>
        <div className=' sm:border-r-1 cursor-pointer'>
          <h1 className='font-semibold hover:text-blue-700 px-3'>Applications & Products</h1>
        </div>
        <div className=' sm:border-r-1 cursor-pointer'>
          <h1 className='font-semibold hover:text-blue-700 px-3'>Sensing Technologies</h1>
        </div>
        <div className=' sm:border-r-1 cursor-pointer'>
          <h1 className='font-semibold hover:text-blue-700 px-3'>Success Stories</h1>
        </div>
      </div>
    </div>
  );
};

export default Section1;
