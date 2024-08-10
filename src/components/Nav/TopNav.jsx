import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMdAlarm, IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const TopNav = () => {
   return (
      <nav className="bg-gray-700 text-white py-3 hidden md:block">
         <div className="max-w-6xl mx-auto flex items-center  justify-between px-2 ">
            <div className="flex items-center space-x-8">
               <div className="flex items-center space-x-2">
               <IoMdCall className="text-xl text-amber-500"/>
               <span>+1800-001-6555</span>
               </div>
               <div className="flex items-center space-x-2">
               <MdEmail className="text-xl text-amber-500"/>
               <span>info@peacefulqode.com</span>
               </div>
            </div>

            <div className="flex items-center space-x-8">
               <div className="flex items-center space-x-2">
               <IoMdAlarm className="text-xl text-amber-500"/>
               <span> Mon-Fri : 9:00AM - 5PM</span>
               </div>
               <div className="flex items-center space-x-3 text-xl *:cursor-pointer">
               <FaFacebookF className="hover:text-amber-400 duration-300"/>
               <FaInstagram className="hover:text-amber-400 duration-300"/>
               <FaLinkedinIn className="hover:text-amber-400 duration-300"/>
               </div>
            </div>
         </div>        
                  
      </nav>
   );
};

export default TopNav;