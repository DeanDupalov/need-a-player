const GameCardHome = () => {
    return (
        <div className="col-12 col-lg-auto py-3 wow fadeInUp">
            <div className="card-pricing ">
                <div className="header">
                    <div className="price-icon"><span className="mai-people"></span></div>
                    <div className="price-title">Team name</div>
                </div>
                <div className="body py-3">
                    <div className="price-tag">
                        <span className="currency">$</span>
                        <h2 className="display-4">60</h2>
                        <span className="period">/monthly</span>
                    </div>
                    <div className="price-info">
                        <p>Choose the plan that right for you</p>
                    </div>
                </div>
                <div className="footer">
                    <a href="#" className="btn btn-outline-primary rounded-pill">Even Details</a>
                </div>
            </div>
        </div>
    );
}

export default GameCardHome;