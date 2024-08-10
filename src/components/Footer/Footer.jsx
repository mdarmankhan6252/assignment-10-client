import { Link } from 'react-router-dom';
import logo from '../../assets/header-logo.png'
const Footer = () => {
   return (
      <footer className="flex flex-col justify-around gap-5 bg-gray-100 py-8 mt-16">
         <div className='flex justify-center'>
            <img src={logo} alt="" className='w-32' />
         </div>
         <nav className="text-lg space-x-6 flex justify-center">
            <Link className='hover:text-amber-600 font-semibold' to='/'>Home</Link>
            <Link className='hover:text-amber-600 font-semibold' to='/about'>About</Link>
            <Link className='hover:text-amber-600 font-semibold' to='/contact'>Contact</Link>
            <Link className='hover:text-amber-600 font-semibold' to='/blog'>Blog</Link>
         </nav>
         <aside className="text-center text-sm">
            <p>&copy; 2024 MD Arman khan. All Rights Reserved.</p>
         </aside>
      </footer>
   );
};

export default Footer;