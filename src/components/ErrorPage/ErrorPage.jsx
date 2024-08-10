
import { Link } from 'react-router-dom';

const ErrorPage = () => {
   return (
      <div className='h-[90vh] w-full flex items-center justify-center flex-col space-y-6 '>
         <h1 className='text-3xl sm:text-5xl text-red-500'>404 page is not found</h1>
         <Link to='/' className='py-3 px-10 bg-amber-500 text-white font-semibold border-2 border-amber-500 duration-300 hover:bg-transparent hover:text-amber-600'>Go to Home</Link>
      </div>
   );
};

export default ErrorPage;