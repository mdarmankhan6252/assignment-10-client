import { IoIosPlay } from 'react-icons/io';
import aboutVideo from '../../assets/aboutVideo.jpg'
const AboutVideo = () => {
   return (
      <div className='max-w-6xl mx-auto mt-20 sm:h-[60vh] relative px-2'>
         <img src={aboutVideo} alt="" className='w-full h-full' />
         <div className='p-4 bg-amber-500 w-16 h-16 rounded-full text-center cursor-pointer absolute top-1/2 left-1/2'>
         <IoIosPlay className='text-3xl text-white ml-1'/>
         </div>
      </div>
   );
};

export default AboutVideo;