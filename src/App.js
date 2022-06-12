import { useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeBanner from "./components/HomeBanner"
import Find from "./components/Find";
import GetInTouch from "./components/GetInTouch";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import EditEvent from "./components/EditEvent"
import DetailsEvent from "./components/DetailsEvent";



function App() {

    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <HelmetProvider>
            <AuthProvider >
                <>
                    <Helmet>
                        <title>Home Page</title>
                        <meta name="description" content="This is an web application where you can find the best football events!" />
                    </Helmet>

                    <div className="back-to-top"></div>
                    <Header />

                    <main>

                        <Routes>
                            <Route path="/" element={<HomeBanner />} />
                            <Route path="/contact" element={<GetInTouch />} />
                            <Route path="/find" element={<Find />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/create" element={<CreateEvent />} />
                            <Route path="/edit-event/:eventId" element={<EditEvent />} />
                            <Route path="/details-event/:eventId" element={<DetailsEvent />} />

                            
                        </Routes>


                        

                    </main>

                    <Footer />


                </>
            </AuthProvider>
        </HelmetProvider>
    );
}

export default App;
