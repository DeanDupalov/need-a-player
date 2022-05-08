import GameCardHome from "./GameCardHome";

const GamesListHome = () => {
    return (
        <div className="page-section border-top">
            <div className="container">
                <div className="text-center wow fadeInUp">
                    <h2 className="title-section">Our Latest Events</h2>
                    <div className="divider mx-auto"></div>
                </div>

                <div className="row justify-content-center">
                    <GameCardHome />
                    <GameCardHome />
                    <GameCardHome />

                </div>
            </div>
        </div>
    )
}

export default GamesListHome;