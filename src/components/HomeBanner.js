import { Link } from 'react-router-dom';

import PlayersListHome from "./PlayersListHome";
import GamesListHome from "./GamesLIstHome";
import Partners from "./Partners";

const HomeBanner = () => {
    return (
        <>
            <div className="page-banner home-banner">
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-lg-6 py-3 wow fadeInUp">
                            <h1 className="mb-4">For Players, For Teams, For Clubs...</h1>
                            <p className="text-lg mb-5">Need-a-Player believes in delivering sport and activity differently. We build enabling technology that connects local communities through shared interests… Our aim is to make finding, organising and playing sport as simple as ordering a cab or a pizza.
                                Let us show you how.</p>

                            <Link to="/create" className="btn btn-outline-primary">Create Your Event</Link>
                            <Link to="/find" className="btn btn-outline-primary">Find Event</Link>

                        </div>
                        <div className="col-lg-6 py-3 wow zoomIn">
                            <div className="img-place">
                                <img src="../assets/img/find-local-events-big.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GamesListHome />
            <PlayersListHome />
            <Partners />
        </>
    )
}


export default HomeBanner;