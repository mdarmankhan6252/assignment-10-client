import { Link } from 'react-router-dom';
import img_1 from '../../assets/1.jpg'
import img_2 from '../../assets/2.jpg'
import img_3 from '../../assets/3.jpg'
import './Category.css'
const Category = () => {
   return (
      <div className='grid grid-cols-1 sm:grid-cols-3 py-16 gap-6 max-w-6xl mx-auto px-2'>
         <div className='relative categories'>
            <img src={img_1} alt="" className='w-full block rounded-xl' />
            <div className='absolute px-2 category rounded-xl'>
               <h3 className='text-2xl text-white font-semibold '>Fabric Design</h3>
               <p className='text-[14px] text-white'>Laundering services can be provided bytes commercial test Alteration provide</p>
               <Link to='/' className='text-amber-500 font-semibold text-lg hover:underline'>Read More</Link>
            </div>
         </div>
         <div className='relative categories'>
            <img src={img_2} alt="" className='w-full block rounded-xl' />
            <div className='absolute px-2 category rounded-xl'>
               <h3 className='text-2xl text-white font-semibold '>Sustain Design</h3>
               <p className='text-[14px] text-white'>Laundering services can be provided bytes commercial test Alteration provide</p>
               <Link to='/' className='text-amber-500 font-semibold text-lg hover:underline'>Read More</Link>
            </div>
         </div>
         <div className='relative categories'>
            <img src={img_3} alt="" className='w-full block rounded-xl' />
            <div className='absolute px-2 category rounded-xl'>
               <h3 className='text-2xl text-white font-semibold '>Culture Design</h3>
               <p className='text-[14px] text-white'>Laundering services can be provided bytes commercial test Alteration provide</p>
               <Link to='/' className='text-amber-500 font-semibold text-lg hover:underline'>Read More</Link>
            </div>
         </div>
      </div>
   );
};

export default Category;