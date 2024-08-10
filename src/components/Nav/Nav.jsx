import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/header-logo.png'
import { useContext, useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';
import { AuthContext } from '../provider/AuthProvider';
const Nav = () => {

   const {user, logout} = useContext(AuthContext);   

   const [menu, setMenu] = useState(false);
   const handleMenu = () =>{
      setMenu(!menu)
   }
   return (
      <nav className="sticky top-0 left-0 right-0 bg-amber-50 shadow py-4 z-10">
         <div className="max-w-6xl mx-auto px-2 flex items-center justify-between">
            <Link to="/">
            <img src={logo} alt="" className='w-32' /></Link>
            <ul className='space-x-6 font-medium hidden md:block'>
               <NavLink className="w-20 p-2 rounded-md inline-block text-center" to='/'>HOME</NavLink>
               <NavLink className="w-20 p-2 rounded-md inline-block text-center" to='/about'>ABOUT</NavLink>
               {
                  user && <NavLink className="w-20 p-2 rounded-md inline-block text-center" to='/contact'>CONTACT</NavLink>
               }
               <NavLink className="w-20 p-2 rounded-md inline-block text-center" to='/blog'>BLOG</NavLink>
               {
                  user && <NavLink className="w-20 p-2 rounded-md inline-block text-center" to='/admin'>Admin</NavLink>
               }
               <span className='text-amber-500'>{user?.email}</span>
               {
                  user ? <span onClick={() => logout()} className='bg-amber-500 py-1 px-2 rounded-lg text-white cursor-pointer hover:bg-amber-600'>Sign Out</span> : <Link to='/register' className='w-20 p-2 inline-block text-center rounded-md text-[#ef6a22]'>Sign Up</Link>
               }
               
               
            </ul>
            <ul className={`font-medium block md:hidden *:block absolute ${menu ? 'right-0' : '-right-40'} top-16 bg-amber-50 p-6 rounded-l-xl duration-500 *:text-left`}>
               <span className='text-amber-500'>{user?.email}</span>
               <NavLink className="w-20 p-2 rounded-md inline-block text-center" to='/'>HOME</NavLink>
               <NavLink className="w-20 p-2 rounded-md inline-block text-center" to='/about'>ABOUT</NavLink>
               {
                  user && <NavLink className="w-20 p-2 rounded-md inline-block text-center" to='/contact'>CONTACT</NavLink>
               }
               <NavLink className="w-20 p-2 rounded-md inline-block text-center" to='/blog'>BLOG</NavLink>
               {
                  user && <NavLink className="w-20 p-2 rounded-md inline-block text-center" to='/admin'>Admin</NavLink>
               }
               {
                  user ? <span onClick={() => logout()} className='bg-amber-500 py-1 px-2 rounded-lg text-white cursor-pointer hover:bg-amber-600 '>Sign Out</span> : <Link to='/register' className='w-20 p-2 inline-block text-center rounded-md text-[#ef6a22]'>Sign Up</Link>
               }
               
            </ul>
            <div onClick={handleMenu} className='absolute right-2 top-6 text-3xl cursor-pointer md:hidden'>
               {
                  menu ? <IoCloseOutline /> : <CiMenuFries />
               }
            
            
            </div>
         </div>
      </nav>
   );
};

export default Nav;