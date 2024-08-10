import { BiUser } from "react-icons/bi";
import Swal from "sweetalert2";
import './Card.css'

const Card = ({ craft, crafts, setCrafts }) => {
   const { _id, name, photo, category, price, rating, customization, time, status, user, email, description } = craft;

   const handleDelete = (_id) => {
      // console.log(_id);
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then((result) => {
         if (result.isConfirmed) {
            console.log(_id);
            fetch(`http://localhost:5000/craft/${_id}`, {
               method: 'DELETE'
            })
               .then(res => res.json())
               .then(data => {
                  if (data.deletedCount > 0) {
                       Swal.fire({
                         title: "Deleted!",
                         text: "Your craft has been deleted.",
                         icon: "success"
                       });
                  const remaining = crafts.filter(cra => cra._id !== _id)
                  setCrafts(remaining)
                  }
               })
         }
      });
   }
   return (
      <div className="border-2 rounded-xl flex flex-col card p-4 ">
         <div className="flex-grow overflow-hidden">
            <img src={photo} alt="" className="w-full h-full" />
         </div>
         <div className=" space-y-3">
            <h3 className="font-semibold text-xl pt-4">{name}</h3>
            <div className="flex  items-center justify-between">
               <h2 className="text-lg text-amber-600 font-medium">$ {price}</h2>
               <h2 className=" text-green-600 font-medium">{status}</h2>
            </div>
            <div className="flex items-center justify-between">
               <p className="font-medium">Rating: {rating}</p>
               <p className="font-medium">customization: {customization}</p>

            </div>
            <div className="flex items-center justify-between">
               <p className="font-medium">Processing time: {time} hours</p>
               <p className="font-medium">Category: {category}</p>
            </div>
            <div className="flex items-center space-x-3">
               <BiUser className="text-2xl text-white bg-amber-500 rounded-full p-0.5" />
               <span className="text-amber-600">{user}</span>
            </div>
            <div className="flex items-center justify-between">
               <button className="mb-4 px-5 py-1.5 bg-amber-500 text-white font-semibold rounded-2xl cursor-pointer">See Details</button>
               <button onClick={() => handleDelete(_id)} className="mb-4 px-5 py-1.5 bg-red-500 text-white font-semibold rounded-2xl cursor-pointer">Delete</button>
            </div>
         </div>

      </div>
   );
};

export default Card;