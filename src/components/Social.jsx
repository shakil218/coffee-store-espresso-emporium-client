import React from 'react';
import CupOne from '../assets/images/cups/Rectangle 9.png'
import CupTwo from '../assets/images/cups/Rectangle 10.png'
import CupThree from '../assets/images/cups/Rectangle 11.png'
import CupFour from '../assets/images/cups/Rectangle 12.png'
import CupFive from '../assets/images/cups/Rectangle 13.png'
import CupSix from '../assets/images/cups/Rectangle 14.png'
import CupSeven from '../assets/images/cups/Rectangle 15.png'
import CupEight from '../assets/images/cups/Rectangle 16.png'

const Social = () => {
  return (
    <div className='z-10 w-9/12  mx-auto'>
      <div className='flex flex-col justify-center items-center my-12'>
        <p>Follow Us Now</p>
        <h3 className="font-rancho text-6xl mt-2 text-[#331A15]">Follow on Instagram</h3>
      </div>
      <div className='grid md:grid-cols-4 mb-20 gap-3'>
        <img src={CupOne} alt="" />
        <img src={CupTwo} alt="" />
        <img src={CupThree} alt="" />
        <img src={CupFour} alt="" />
        <img src={CupFive} alt="" />
        <img src={CupSix} alt="" />
        <img src={CupSeven} alt="" />
        <img src={CupEight} alt="" />
      </div>
    </div>
  );
};

export default Social;