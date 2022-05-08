import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Find from "./components/Find";
import GetInTouch from "./components/GetInTouch";

import Login from "./components/Login";
import Register from "./components/Register";
import HomeBanner from "./components/HomeBanner"


function App() {
    return (
        <>
            <div className="back-to-top"></div>
            <Header />
            
            <main>
             
                <Routes>
                    <Route path="/" element={<HomeBanner />  } />   
                    <Route path="/contact" element={<GetInTouch />} />
                    <Route path="/find" element={<Find />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>

            </main>

            <Footer />

        </>
    );
}

export default App;
