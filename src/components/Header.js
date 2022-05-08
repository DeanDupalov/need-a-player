import { NavLink } from "react-router-dom";

import HomeBanner from "./HomeBanner"

const Header = () => {

    const activated = (isActive) => "nav-link" + (isActive ? " active" : "");

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light navbar-float">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">Need-a<span className="text-primary">-Payer</span></NavLink>

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarContent">
                        <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
                            <li className="nav-item ">
                                <NavLink to="index.html" className={activated()}>Create Event</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="about.html" className={activated()}>Be a Player</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/find" className={activated()}>Find</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="blog.html" className={activated()}>My Events</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className={activated()}>Contact us</NavLink>
                            </li>
                        </ul>

                        <div className="ml-auto">
                            <div>
                                <NavLink to="/login" className="btn btn-outline rounded-pill">Login</NavLink>
                                <NavLink to="/register" className="btn btn-outline rounded-pill">Register</NavLink>
                            </div>
                            <div>
                                <NavLink to="#" className="btn btn-outline rounded-pill">Profile</NavLink>
                                <NavLink to="#" className="btn btn-outline rounded-pill">Logout</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            
        </header>
    )
}


export default Header