import about_img from '../../assets/about.jpg'
const About = () => {
   return (
      <div className='flex items-center justify-between *:basis-[50%] mt-24 max-w-6xl mx-auto flex-col-reverse gap-y-8 sm:gap-y-0 sm:flex-row px-2'>
         <div className='space-y-6'>
            <h3 className='text-amber-600 font-semibold text-2xl font-serif'>About Us</h3>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>The History Of Textiles From Handcrafted</h1>
            <p className='text-lg text-[#9a9595]'>Textiles are materials made from fibers or yarn, and they are used to create widetest range of products such as clothing and industrial goods.</p>
            <h4 className='text-2xl'><span className='text-amber-600'>01. </span> Digital Shop Available</h4>
            <h4 className='text-2xl'><span className='text-amber-600'>02. </span>  Great Client Support</h4>
            <button className='text-lg font-semibold py-3 px-8 bg-amber-500 text-white rounded-md border-2 border-white hover:bg-transparent hover:text-amber-600 duration-500 hover:border-amber-500'>Know More</button>
         </div>
         <div>
            <img src={about_img} alt="" />
         </div>
         
      </div>
   );
};

export default About;