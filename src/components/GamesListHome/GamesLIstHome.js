import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllGames } from '../../api/data'

import GameCardHome from "./GameCardHome/GameCardHome";

const GamesListHome = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getAllGames()
            .then(res => {
                setGames(res);
            }).catch(err => {
                alert(err.message.split('\n'))
            })
    }, [])


    const gamesSection = (
        <div className="page-section border-top">
            <div className="container">
                <div className="text-center wow fadeInUp">
                    <h2 className="title-section">Our Latest Events</h2>
                    <div className="divider mx-auto"></div>
                </div>

                <div className="row justify-content-center">
                    {games.map(game => <GameCardHome key={game._id} game={game} />)}
                </div>

            </div>
            <div className="container text-center mt-5">
                <Link to="/find" className="btn btn-outline-primary rounded-pill">Discover More</Link>
            </div>
        </div>
    );

    return (

        <>
            {games.length > 0
                ? gamesSection
                : <div className="container text-center mt-5">
                    <Link to="/create" className="btn btn-outline-primary rounded-pill">Create First Event</Link>
                </div>
            }
        </>

    )
}

export default GamesListHome;