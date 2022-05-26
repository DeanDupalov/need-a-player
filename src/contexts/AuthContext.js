import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useLocalStorage('user',{
        _id: '',
        email: '',
        accessToken: ''

    });

    const clearUser = () => {
        setUser({
            _id: '',
            email: '',
            accessToken: ''
        })
    }

    const login = (authData) => {
        setUser(authData);
    }

    const logout = () => {
        clearUser();
    }


    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: Boolean(user.accessToken) }} >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
}