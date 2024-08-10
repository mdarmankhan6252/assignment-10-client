import { Outlet } from "react-router-dom";
import TopNav from "../components/Nav/TopNav";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

const Root = () => {
   return (
      <div>
         <TopNav/>
         <Nav/>
         <Outlet/>
         <Footer/>
      </div>
   );
};

export default Root;