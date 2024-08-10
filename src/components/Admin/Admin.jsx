import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Admin = () => {
   const navigate = useNavigate();

   const handleAddProduct = e =>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const category = form.category.value;
      const price = form.price.value;
      const rating = form.rating.value;
      const customization = form.customization.value;
      const time = form.time.value;
      const status = form.status.value;
      const photo = form.photo.value;
      const user = form.user.value;
      const email = form.email.value;
      const description = form.description.value;

      const newCraft = {name, category, price, rating, customization, time, status, photo, user, email, description}

      console.log(newCraft);

      fetch('http://localhost:5000/craft', {
         method:'POST',
         headers:{
            'content-type' : 'application/json'
         },
         body : JSON.stringify(newCraft)
      })
      .then(res => res.json())
      .then(data =>{
         console.log(data);
         if(data.insertedId){
            Swal.fire({
               title: 'Success!',
               text: 'Product Added Successfully',
               icon: 'success',
               confirmButtonText: 'Okay!'
             })
             form.reset()
             navigate('/')
         }
      })
   }


   return (
      <div>
         <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl py-16 font-semibold text-amber-600">Add Your Craft</h1>
         
         <form onSubmit={handleAddProduct} className="max-w-3xl mx-auto  p-4 space-y-4 shadow-amber-500 shadow-[0px_0px_3px_0]">
            <div className="*:w-[48%] space-x-4 *:p-2 *:border *:outline-amber-500 ">
               <input type="text" name="name" id="" placeholder="Craft Name" required/>
               <input type="text" name="category" id="" placeholder="Craft Category" required/>
            </div>
            <div className="*:w-[48%] space-x-4 *:p-2 *:border *:outline-amber-500 ">
               <input type="text" name="price" id="" placeholder="Craft Price" required/>
               <input type="text" name="rating" id="" placeholder="Craft Rating" required/>
            </div>
            <div className="*:w-[48%] space-x-4 *:p-2 *:border *:outline-amber-500 ">
               <input type="text" name="customization" id="" placeholder="Craft customization" required/>
               <input type="text" name="time" id="" placeholder="Processing time" required/>
            </div>
            <div className="*:w-[48%] space-x-4 *:p-2 *:border *:outline-amber-500 ">
               <input type="text" name="status" id="" placeholder="Stock Status" required/>
               <input type="text" name="photo" id="" placeholder="Craft Photo URL" required/>
            </div>
            <div className="*:w-[48%] space-x-4 *:p-2 *:border *:outline-amber-500 ">
            <input type="text" name="user" id="" placeholder="User Name" required/>
            <input type="text" name="email" id="" placeholder="User Email" required/>
            </div>
            <div className="*:w-[98%] space-x-4 *:p-2 *:border *:outline-amber-500 ">
               <textarea name="description" rows={5} placeholder="Write description" required></textarea>
            </div>
            <div className="flex items-center justify-between">
            <p className="text-[#867777]">Do not forget to click <span className="text-amber-600">Add Craft</span> button 😊</p>
            <button className="mr-2 border-2 border-amber-500 bg-amber-500 py-2 px-6 font-semibold text-white hover:bg-transparent hover:text-amber-500 duration-300">Add Craft</button>
            </div>
         </form>
      </div>
   );
};

export default Admin;