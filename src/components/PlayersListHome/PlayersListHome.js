import PlayerCardHome from "../PlayerCardHome";

const PlayersListHome = () => {
    
    return (
        <div className="page-section border-top">
            <div className="container">
                <div className="text-center wow fadeInUp">
                    <div className="subhead">Our Players</div>
                    <h2 className="title-section">See our latest <span className="marked">Players</span></h2>
                    <div className="divider mx-auto"></div>
                </div>
                <div className="row my-5 card-blog-row">
                    <PlayerCardHome />
                    <PlayerCardHome />
                    <PlayerCardHome />
                    <PlayerCardHome />
                </div>

                <div className="text-center">
                    <a href="blog.html" className="btn btn-outline-primary rounded-pill">Discover More</a>
                </div>
            </div>
        </div>
    );

}


export default PlayersListHome;