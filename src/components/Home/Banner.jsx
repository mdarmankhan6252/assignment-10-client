
import { IoIosArrowRoundForward } from 'react-icons/io';
import './Banner.css'

const Banner = () => {
   return (
      <div className="textile">
         <div className='space-y-4 w-full'>
         <h3 className='text-2xl text-amber-500 font-medium'>WELCOME TO TEXTTICA</h3>
         <h1 className='text-4xl sm:text-5xl lg:text-6xl text-white font-bold'>We Have Also A Ton<br/>Of Fun The Process</h1>
         <div className='flex items-center space-x-3 text-white w-[180px] text-center mx-auto bg-[#ef6a22] py-3 px-6 font-semibold cursor-pointer border-2 border-[#ef6a22] duration-300 hover:bg-transparent rounded-lg'>
         <button>Read More</button> 
         <span className='text-4xl -mb-2'><IoIosArrowRoundForward /></span>
         </div>
         </div>                 
      </div>
   );
};

export default Banner;