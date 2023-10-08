import React from 'react';

const LogoSection = () => {
  return (
    <div className='sm:px-32 px-6 py-10'>
      <div className='flex flex-wrap justify-between items-center '>
        <div className='xl:my-0 my-5 mx-auto'>
          <img src='/assets/images/logo_1.png' alt='' />
        </div>
        <div className='xl:my-0 my-5 mx-auto'>
          <img src='/assets/images/logo_2.png' alt='' />
        </div>
        <div className='xl:my-0 my-5 mx-auto'>
          <img src='/assets/images/logo_3.png' alt='' />
        </div>
        <div className='xl:my-0 my-5 mx-auto'>
          <img src='/assets/images/logo_4.png' alt='' />
        </div>
        <div className='xl:my-0 my-5 mx-auto'>
          <img src='/assets/images/logo_5.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
