import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Find from "./components/Find";
import GetInTouch from "./components/GetInTouch";

import Login from "./components/Login";
import Register from "./components/Register";
import HomeBanner from "./components/HomeBanner"
import CreateEvent from "./components/CreateEvent";



function App() {

  
    return (
        <HelmetProvider>
            <AuthProvider >
                <>
                    <Helmet>
                        <title>Home Pge</title>
                        <meta name="description" content="Tutorial for React Helmet" />
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
                        </Routes>

                    </main>

                    <Footer />

                </>
            </AuthProvider>
        </HelmetProvider>
    );
}

export default App;
