import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
   const loadedUsers = useLoaderData();
   const [users, setUsers] = useState(loadedUsers);

   const handleDelete = id => {
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


            fetch(`http://localhost:5000/users/${id}`, {
               method: 'DELETE'
            })
               .then(res => res.json())
               .then(data => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                       Swal.fire({
                         title: "Deleted!",
                         text: "Your file has been deleted.",
                         icon: "success"
                       });
                       const remaining = users.filter(user => user._id !== id);
                       setUsers(remaining)
                  }
               })
         }
      });
   }

   return (
      <div className="max-w-6xl mx-auto">
         <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center py-16 ">All Users : {users.length}</h2>

         <table className="table">
            <thead>
               <tr>
                  <th>No</th>
                  <th>Email</th>
                  <th>Created Time</th>
                  <th className="flex justify-center">Action</th>
               </tr>

            </thead>
            <tbody>
               {
                  users.map((user, i) => <tr key={i}>
                     <th>{i + 1}</th>
                     <td>{user.email}</td>
                     <td>{user.createdAt}</td>
                     <td onClick={() => handleDelete(user._id)} className="flex justify-center font-semibold cursor-pointer">X</td>
                  </tr>)
               }
            </tbody>
         </table>
      </div>
   );
};

export default Users;