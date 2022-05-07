import HomeBanner from "./HomeBanner"

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light navbar-float">
                <div className="container">
                    <a href="index.html" className="navbar-brand">Need-a<span className="text-primary">-Payer</span></a>

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarContent">
                        <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
                            <li className="nav-item active">
                                <a href="index.html" className="nav-link">Create Event</a>
                            </li>
                            
                            <li className="nav-item">
                                <a href="about.html" className="nav-link">Be a Player</a>
                            </li>
                            <li className="nav-item">
                                <a href="services.html" className="nav-link">Find</a>
                            </li>
                            <li className="nav-item">
                                <a href="blog.html" className="nav-link">My Events</a>
                            </li>
                            <li className="nav-item">
                                <a href="contact.html" className="nav-link">Contact us</a>
                            </li>
                        </ul>

                        <div className="ml-auto">
                            <div>
                                <a href="#" className="btn btn-outline rounded-pill">Login</a>
                                <a href="#" className="btn btn-outline rounded-pill">Register</a>
                            </div>
                            <div>
                                <a href="#" className="btn btn-outline rounded-pill">Profile</a>
                                <a href="#" className="btn btn-outline rounded-pill">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <HomeBanner />
        </header>
    )
}


export default Header