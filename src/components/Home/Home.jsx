import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Category from "./Category";
import Card from "./Card";
import About from "./About";
import AboutVideo from "./AboutVideo";
import ColorFullAccordion from "./FaQ";
import { useState } from "react";

const Home = () => {
   const loadedCraft = useLoaderData();
   const [crafts, setCrafts] = useState(loadedCraft)
   console.log(loadedCraft);
   return (
      <div className="">
         <Banner/>
         <Category/>
         <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-semibold pb-16">All Craft</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-2">
            {
               crafts.map((craft, i) => <Card key={i} craft={craft} crafts={crafts} setCrafts={setCrafts}></Card>)
            }
         </div>
         <About/>
         <AboutVideo/>
         <div className="max-w-6xl mx-auto">
         <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-semibold py-16">Frequently  Asked Question </h1>
         <ColorFullAccordion/>
         </div>
      </div>
   );
};

export default Home;