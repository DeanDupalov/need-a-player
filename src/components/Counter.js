const Counter = () => {
    return (
        <div className="page-section counter-section">
            <div className="container">
                <div className="row align-items-center text-center">
                    <div className="col-lg-4">
                        <p>Total Invest</p>
                        <h2>$<span className="number" data-number="816278"></span></h2>
                    </div>
                    <div className="col-lg-4">
                        <p>Yearly Revenue</p>
                        <h2>$<span className="number" data-number="216422"></span></h2>
                    </div>
                    <div className="col-lg-4">
                        <p>Growth Ration</p>
                        <h2><span className="number" data-number="73"></span>%</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Counter;