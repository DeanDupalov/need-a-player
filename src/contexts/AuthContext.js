import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [user, setUser] = useState({
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
        <AuthContext.Provider value={{ user, login, logout }} >
            {children}
        </AuthContext.Provider>
    );
}