import { Routes, Route } from "react-router-dom";

import { AuthContext } from "./contexts/AuthContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Find from "./components/Find";
import GetInTouch from "./components/GetInTouch";

import Login from "./components/Login";
import Register from "./components/Register";
import HomeBanner from "./components/HomeBanner"
import { useState } from "react";


function App() {

    const [user, setUser] = useState({
        _id: '',
        email: '',
        accessToken: ''

    });

    const register = (authData) => {
        setUser(authData)
    }


    const login = (authData) => {
        setUser(authData);
    }

    const clearUser = () => {
        setUser({
            _id: '',
            email: '',
            accessToken: ''
        })
    }




    return (
        <AuthContext.Provider value={{user, login,register, clearUser}}>
            <>
                <div className="back-to-top"></div>
                <Header email={user.email} />

                <main>

                    <Routes>
                        <Route path="/" element={<HomeBanner />} />
                        <Route path="/contact" element={<GetInTouch />} />
                        <Route path="/find" element={<Find />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        {/* <Route path="/logout" element={<Register />} /> */}
                    </Routes>

                </main>

                <Footer />

            </>
        </AuthContext.Provider>
    );
}

export default App;
