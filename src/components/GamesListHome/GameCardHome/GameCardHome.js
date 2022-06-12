import {Link, useParams} from 'react-router-dom';

const GameCardHome = ({
    game
}) => {
    return (
        <div className="col-12 col-lg-auto py-3 wow fadeInUp">
            <div className="card-pricing ">
                <div className="header">
                    <div className="price-icon"><span className="mai-people"></span></div>
                    <div className="price-title">{game.name}</div>
                </div>
                <div className="body py-3">
                    <div className="price-tag">
                        <h2 className="display-4">{game.members}</h2>
                        <span className="period"> a SIDE</span>
                    </div>
                    <div className="price-info">
                        <p>{game.description}</p>
                    </div>
                    <div><span className="period">Date: {game.date}</span></div>
                    <div><span className="period">Starts: {game.startTime} </span><span className="period">- Ends: {game.endTime}</span></div>
                    <p><span className="period">Address: {game.town}, {game.address}</span></p>
                    
                </div>
                <div className="footer">
                    <Link to={`/details-event/${game._id}`} className="btn btn-outline-primary rounded-pill">Even Details</Link>
                </div>
            </div>
        </div>
    );
}

export default GameCardHome;