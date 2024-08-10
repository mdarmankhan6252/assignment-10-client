import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
   const {user} = useContext(AuthContext)
   if(user){
      return children
   }
   return <Navigate to='/register'></Navigate>
};

export default PrivateRoute;