import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Register = () => {

   const { createUser } = useContext(AuthContext)

   const handleRegister = e => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      createUser(email, password)
      .then(result =>{
         console.log(result.user);
         const createdAt = result.user?.metadata?.creationTime;
         const user = {email, createdAt : createdAt}
         fetch('http://localhost:5000/user', {
            method:'POST',
            headers:{
               'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
         })
         .then(res => res.json())
         .then(data =>{
            console.log(data);
            if(data.insertedId){
               Swal.fire({
                  title: 'Successful!',
                  text: 'User Created Successfully',
                  icon: 'success',
                  confirmButtonText: 'Okay'
                })
            }
         })

         form.reset();
      })
      .catch(error => {
         console.log(error);
      })
   }
   return (
      <div>
         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center py-16 text-amber-600">Create An Account.</h1>
         <form onSubmit={handleRegister} className="border max-w-xl mx-auto p-6 space-y-6 border-amber-500">
            <input className="w-full p-2 border border-amber-600 outline-amber-500 rounded-md" type="email" name="email" placeholder="Enter Email" required />
            <input className="w-full p-2 border border-amber-600 outline-amber-500 rounded-md" type="password" name="password" placeholder="Enter Password" required />
            <input className="border w-full p-2 text-center rounded-md border-amber-500 font-semibold text-amber-600 hover:bg-amber-500 hover:text-white duration-300 cursor-pointer" type="submit" value="Create user" />
            <p>Already have an account ? <Link to='/login' className="font-semibold text-amber-500">Sign In</Link></p>
         </form>
      </div>
   );
};

export default Register;