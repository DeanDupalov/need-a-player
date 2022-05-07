const GamesList = () => {
    return (
        <div className="page-section border-top">
            <div className="container">
                <div className="text-center wow fadeInUp">
                    <h2 className="title-section">Pricing Plan</h2>
                    <div className="divider mx-auto"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 col-lg-auto py-3 wow fadeInLeft">
                        <div className="card-pricing">
                            <div className="header">
                                <div className="price-icon"><span className="mai-people"></span></div>
                                <div className="price-title">Membership</div>
                            </div>
                            <div className="body py-3">
                                <div className="price-tag">
                                    <span className="currency">$</span>
                                    <h2 className="display-4">30</h2>
                                    <span className="period">/monthly</span>
                                </div>
                                <div className="price-info">
                                    <p>Choose the plan that right for you</p>
                                </div>
                            </div>
                            <div className="footer">
                                <a href="#" className="btn btn-outline rounded-pill">Choose Plan</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-auto py-3 wow fadeInUp">
                        <div className="card-pricing active">
                            <div className="header">
                                <div className="price-labled">Best</div>
                                <div className="price-icon"><span className="mai-business"></span></div>
                                <div className="price-title">Dedicated</div>
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
                                <a href="#" className="btn btn-outline rounded-pill">Choose Plan</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-auto py-3 wow fadeInRight">
                        <div className="card-pricing">
                            <div className="header">
                                <div className="price-icon"><span className="mai-rocket-outline"></span></div>
                                <div className="price-title">Private</div>
                            </div>
                            <div className="body py-3">
                                <div className="price-tag">
                                    <span className="currency">$</span>
                                    <h2 className="display-4">90</h2>
                                    <span className="period">/monthly</span>
                                </div>
                                <div className="price-info">
                                    <p>Choose the plan that right for you</p>
                                </div>
                            </div>
                            <div className="footer">
                                <a href="#" className="btn btn-outline rounded-pill">Choose Plan</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GamesList;