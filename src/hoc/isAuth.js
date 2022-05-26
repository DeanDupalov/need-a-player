import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const isAuth = (Component) => {
    const WrapperComponent = (props) => {
        const { isAuthenticated } = useAuth() ;
        return isAuthenticated 
            ? <Component {...props} /> 
            : <Navigate to="/login"/>
    }

    return WrapperComponent;
};